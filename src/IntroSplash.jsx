
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import './IntroSplash.css';

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const timer = window.setTimeout(
      () => setVisible(false),
      reducedMotion ? 500 : 2100
    );

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          aria-label="Introducing Sejal Miraje"
        >
          <div className="intro-splash-grid" />

          <motion.div
            className="intro-lightning"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
          >
            <span className="intro-eyebrow">
              DEVELOPER PORTFOLIO · 2026
            </span>

            <h1>
              SEJAL<span>.</span>
            </h1>

            <p>Building digital experiences with intent.</p>
          </motion.div>

          <div className="intro-bottom">
            <span>DESIGN. DEVELOP. DEPLOY.</span>
            <span>01 / 01</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
