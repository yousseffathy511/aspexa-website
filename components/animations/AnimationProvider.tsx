import React, { useEffect, useRef, createContext, useContext, useState } from 'react';
import Lenis from 'lenis';

// Custom Apple-style bezier curve (expo-out effect)
export const appleEasing = [0.22, 1, 0.36, 1] as const;

// Animation configuration context
interface AnimationConfig {
    duration: number;
    easing: readonly [number, number, number, number];
    staggerDelay: number;
    viewportThreshold: number;
}

const defaultConfig: AnimationConfig = {
    duration: 0.8,
    easing: appleEasing,
    staggerDelay: 0.1,
    viewportThreshold: 0.2, // 20% visible before triggering
};

// Lenis context for scroll control
interface LenisContextType {
    lenis: Lenis | null;
    scrollTo: (target: number | string | HTMLElement, options?: any) => void;
}

const LenisContext = createContext<LenisContextType>({ lenis: null, scrollTo: () => { } });
const AnimationContext = createContext<AnimationConfig>(defaultConfig);

export const useAnimationConfig = () => useContext(AnimationContext);
export const useLenis = () => useContext(LenisContext);

interface AnimationProviderProps {
    children: React.ReactNode;
    config?: Partial<AnimationConfig>;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
    children,
    config = {}
}) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const rafIdRef = useRef<number | null>(null);

    useEffect(() => {
        let lenisInstance: Lenis | null = null;

        try {
            // Initialize Lenis smooth scrolling
            lenisInstance = new Lenis({
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
            });

            setLenis(lenisInstance);

            // Animation frame loop for Lenis
            function raf(time: number) {
                try {
                    if (lenisInstance) {
                        lenisInstance.raf(time);
                    }
                    rafIdRef.current = requestAnimationFrame(raf);
                } catch (e) {
                    console.error('Lenis raf error:', e);
                }
            }
            rafIdRef.current = requestAnimationFrame(raf);
        } catch (e) {
            console.error('Lenis initialization error:', e);
        }

        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
            if (lenisInstance) {
                try {
                    lenisInstance.destroy();
                } catch (e) {
                    console.error('Lenis destroy error:', e);
                }
            }
        };
    }, []);

    // Helper function to scroll to a target
    const scrollTo = (target: number | string | HTMLElement, options?: any) => {
        if (lenis) {
            lenis.scrollTo(target, {
                duration: 1.2,
                ...options
            });
        } else {
            // Fallback to native scroll if Lenis not ready
            if (typeof target === 'number') {
                window.scrollTo(0, target);
            }
        }
    };

    const mergedConfig = { ...defaultConfig, ...config };
    const lenisContextValue = { lenis, scrollTo };

    return (
        <LenisContext.Provider value={lenisContextValue}>
            <AnimationContext.Provider value={mergedConfig}>
                {children}
            </AnimationContext.Provider>
        </LenisContext.Provider>
    );
};

export default AnimationProvider;
