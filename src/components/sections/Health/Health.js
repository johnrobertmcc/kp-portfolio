import PropTypes from 'prop-types';
import styles from './Health.module.scss';
/**
 * Renders the Health Component
 *
 * @author  John Robert McCann
 * @since   12/12/2022
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.component The name of the component.
 * @return  {Element}                 The Health component.
 */
export default function Health({ component }) {
  return <p className={styles.string}>{component} component</p>;
}
Health.propTypes = {
  component: PropTypes.string,
};
Health.defaultProps = {
  component: 'Health',
};
