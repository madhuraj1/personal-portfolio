import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.open ? 'black' : 'white'}
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({
  toggle,
  open,
}: {
  toggle: () => void;
  open: boolean;
}) => {
  const loc = useLocation();
  const locations = ['/'];
  return (
    <button className="mobile_nav__toggle z-[99999]" onClick={toggle}>
      <svg width="20" height="20" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          open={locations.includes(loc.pathname) ? open : true}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          open={locations.includes(loc.pathname) ? open : true}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          open={locations.includes(loc.pathname) ? open : true}
        />
      </svg>
    </button>
  );
};
