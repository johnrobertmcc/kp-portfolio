import { useState } from 'react';
import styles from './Header.module.scss';
import Container from 'components/Container';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import cn from 'classnames';
import { ACCESSIBLE_HEADER } from 'constants';
import { RIGHT, LEFT } from './Header.utils';
import { LINKED_IN } from 'constants';

/**
 * Renders the Global Header Component.
 *
 * @author  John Robert McCann
 * @since   6/26/2022
 * @version 1.0.0
 * @return {Element} The Header component.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Container layout="nav" tag={'header'} className={cn(styles.header)}>
      <h1 className="sr-only">{ACCESSIBLE_HEADER}</h1>
      <div className={styles.navigation}>
        <img
          src="./favicon.webp"
          alt="Kimberly Perez"
          className={styles.logoImg}
        />
        <NavLinks />
      </div>
      <button onClick={() => setOpen(true)} className={styles.openMenu}>
        Menu
      </button>
      <NavMenu open={open} setOpen={setOpen} />
      <a href={LINKED_IN} className={styles.linkedIn}>Linked In</a>
    </Container>
  );
}
