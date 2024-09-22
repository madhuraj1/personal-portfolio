import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ close }: { close: () => void }) => (
  <motion.ul className="mobile_nav__ullist" variants={variants}>
    {itemIds.map((i) => (
      <MenuItem close={close} i={i.i} key={i.i} text={i.text} to={i.to} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    i: 0,
    text: 'Home',
    to: '/',
  },
  {
    i: 1,
    text: 'About Us',
    to: '/about',
  },
  {
    i: 2,
    text: 'Memories',
    to: '/memories',
  },
  {
    i: 3,
    text: 'Films',
    to: '/films',
  },
  {
    i: 4,
    text: 'Contact',
    to: '/contact',
  },
];
