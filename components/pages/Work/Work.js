import PropTypes from 'prop-types';
import { useRef } from 'react';
import styles from './Work.module.scss';
import Container from 'components/layout/Container';
import Link from 'next/link';
import { INTRODUCTION } from 'constants';
import { OUTREACH } from 'constants';
/**
 * Renders the portfolio categories and introduction.
 *
 * @author  John Robert McCann
 * @since   12/11/2022
 * @version 1.0.0
 * @return  {Element}  The Work component.
 */
export default function Work({ links }) {
  const linkRefs = useRef({});

  return (
    <Container paddingTop paddingBtm>
      <ul className={styles.categories}>
        {links &&
          links.map((link, i) => {
            return (
              <li
                key={i}
                className={styles.listItem}
                onClick={() => linkRefs?.current?.[i].click()}
              >
                <div className={styles.imgContainer}>
                  <img src={link?.img} className={styles.image} />
                </div>
                <Link href={link?.url} ref={(el) => (linkRefs.current[i] = el)}>
                  {link?.title}
                </Link>
              </li>
            );
          })}
      </ul>

      <div className={styles.intro}>
        <p className={styles.copy}>{INTRODUCTION}</p>
      </div>
    </Container>
  );
}
