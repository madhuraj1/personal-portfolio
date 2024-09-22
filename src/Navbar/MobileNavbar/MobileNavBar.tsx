import * as React from 'react';
import { useRef } from 'react';
import { motion, sync, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import './styles.css';
import { Navigation } from './Navigation';
import { MenuToggle } from './MobileTogle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef as any);
  const closeNav = () => {
    toggleOpen();
  };

  return (
    <motion.nav
      className="mobile_navigation_bar"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation close={closeNav} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
