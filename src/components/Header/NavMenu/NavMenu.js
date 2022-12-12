import Drawer from 'components/Drawer';
import PropTypes from 'prop-types';
import NavLinks from '../NavLinks';
import styles from './NavMenu.module.scss';

/**
 * Renders the global nav bar.
 *
 * @author  John Robert McCann
 * @since   08/27/2022
 * @version 1.0.0
 * @param   {object}   props              The component as props.
 * @param   {boolean}  props.open         Boolean to declare open or not.
 * @return  {Element}                     The NavMenu component.
 */
export default function NavMenu({ open, setOpen }) {
  return (
    <Drawer
      data={{
        children: <NavLinks className={styles.menuDrawer} />,
      }}
      className={styles.drawer}
      open={open}
      closeDrawer={() => setOpen(false)}
    />
  );
}
