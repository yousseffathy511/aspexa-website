import React from 'react';
import { motion, Variants } from 'framer-motion';
import { appleEasing, useAnimationConfig } from './AnimationProvider';

const revealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

interface RevealTextProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    delay?: number;
    splitWords?: boolean;
}

export const RevealText: React.FC<RevealTextProps> = ({
    children,
    className = '',
    as: Component = 'div',
    delay = 0,
    splitWords = false,
}) => {
    const config = useAnimationConfig();
    const MotionComponent = motion(Component as any);

    // Simple reveal without word splitting for better performance
    return (
        <MotionComponent
            className={className}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: config.duration,
                ease: appleEasing,
                delay,
            }}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </MotionComponent>
    );
};

export default RevealText;
