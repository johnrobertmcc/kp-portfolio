import Container from 'components/layout/Container';
import PropTypes from 'prop-types';
import styles from './About.module.scss';
import {
  CLIENTS_LIST,
  CLIENTS,
  SERVICES,
  SERVICES_LIST,
  HEADING,
  INTRO,
} from './About.utils';
/**
 * Renders the About Component
 *
 * @author  John Robert McCann
 * @since   12/11/2022
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.component The name of the component.
 * @return  {Element}                 The About component.
 */
export default function About({ component }) {
  return (
    <Container className={styles.aboutPage} tag="article">
      <section className={styles.information}>
        <h2 className={styles.heading}>{HEADING}</h2>
        <p className={styles.introduction}>{INTRO}</p>
      </section>
      <section className={styles.providedList}>
        {!!SERVICES_LIST.length && (
          <ul className={styles.services}>
            <h4 className={styles.provided}>{SERVICES}</h4>
            {SERVICES_LIST.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        )}
        {!!CLIENTS_LIST.length && (
          <ul className={styles.clients}>
            <h4 className={styles.provided}>{CLIENTS}</h4>
            {CLIENTS_LIST.map((client, i) => (
              <li key={i}>{client}</li>
            ))}
          </ul>
        )}
      </section>
    </Container>
  );
}
About.propTypes = {
  component: PropTypes.string,
};
About.defaultProps = {
  component: 'About',
};
