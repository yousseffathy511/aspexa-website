import React from 'react';
import { motion, Variants } from 'framer-motion';
import { appleEasing, useAnimationConfig } from './AnimationProvider';

const fadeScaleVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
    },
};

interface FadeScaleProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export const FadeScale: React.FC<FadeScaleProps> = ({
    children,
    className = '',
    delay = 0,
    duration,
}) => {
    const config = useAnimationConfig();

    return (
        <motion.div
            className={className}
            variants={fadeScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: duration ?? config.duration,
                ease: appleEasing,
                delay,
            }}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeScale;
