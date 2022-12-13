import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Container from 'components/layout/Container';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import cn from 'classnames';
import { ACCESSIBLE_HEADER } from 'constants';
import LinkedIn from 'components/utils/LinkedIn';
import { disableScroll, enableScroll } from 'functions/utils/scroll';

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

  useEffect(() => {
    if (open) {
      disableScroll();
    }

    if (!open) {
      enableScroll();
    }
  }, [open]);

  console.log('jr open', open);
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
      <LinkedIn />
    </Container>
  );
}
