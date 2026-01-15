import React from 'react';
import { motion, Variants } from 'framer-motion';
import { appleEasing, useAnimationConfig } from './AnimationProvider';

const containerVariants: Variants = {
    hidden: {},
    visible: {},
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
};

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    initialDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
    children,
    className = '',
    staggerDelay,
    initialDelay = 0,
}) => {
    const config = useAnimationConfig();
    const effectiveStagger = staggerDelay ?? config.staggerDelay;

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                staggerChildren: effectiveStagger,
                delayChildren: initialDelay,
            }}
        >
            {children}
        </motion.div>
    );
};

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
    children,
    className = '',
}) => {
    const config = useAnimationConfig();

    return (
        <motion.div
            className={className}
            variants={itemVariants}
            transition={{
                duration: config.duration,
                ease: appleEasing,
            }}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
