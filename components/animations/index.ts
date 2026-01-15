// Animation Components - Apple-style scroll-driven animations
// Only export what's actually used to avoid importing framer-motion side effects
export { AnimationProvider, useAnimationConfig, useLenis, appleEasing } from './AnimationProvider';

// NOTE: RevealText, FadeScale, StaggerContainer, StaggerItem are available but not exported
// to prevent framer-motion bundle from being loaded unnecessarily
// If needed, import directly: import { RevealText } from './components/animations/RevealText';
