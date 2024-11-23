import * as React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({
  i,
  text,
  to,
  close,
}: {
  i: number;
  text: string;
  to: string;
  close: () => void;
}) => {
  const style = { border: `2px solid ${colors[i]}` };
  const navigate = useNavigate();
  const loc = useLocation();
  console.log(loc.pathname);

  return (
    <motion.li
      onClick={() => {
        close();
        navigate(to);
      }}
      className="mobile_nav__liItem"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        style={{
          fontWeight: loc.pathname === to ? 'bold' : 'normal',
        }}
        className="text-placeholder text-md font-medium"
      >
        {text}
      </div>
    </motion.li>
  );
};
