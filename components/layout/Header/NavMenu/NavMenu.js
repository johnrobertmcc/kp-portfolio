import Drawer from 'components/utils/Drawer';
import LinkedIn from 'components/utils/LinkedIn';
import NavLinks from '../NavLinks';
import styles from './NavMenu.module.scss';

/**
 * Renders the global nav <aside/>.
 *
 * @author  John Robert McCann
 * @since   08/27/2022
 * @version 1.0.0
 * @param   {object}   props      The component as props.
 * @param   {boolean}  props.open Boolean to declare open or not.
 * @return  {Element}             The NavMenu component.
 */
export default function NavMenu({ open, setOpen }) {
  const children = (
    <>
      <NavLinks
        className={styles.menuDrawer}
        closeDrawer={() => setOpen(false)}
      />
      <LinkedIn className={styles.mobileLinkedIn} />
    </>
  );
  return (
    <Drawer
      data={{
        children,
      }}
      className={styles.drawer}
      open={open}
      closeDrawer={() => setOpen(false)}
    />
  );
}
