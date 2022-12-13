import PropTypes from 'prop-types';
import styles from './Fashion.module.scss';
/**
* Renders the Fashion Component
*
* @author  John Robert McCann
* @since   12/12/2022
* @version 1.0.0
* @param   {object}  props           The component destructured as props.
* @param   {string}  props.component The name of the component.
* @return  {Element}                 The Fashion component.
*/
export default function Fashion({component}) {
  return <p className={styles.string}>{component} component</p>;
}
Fashion.propTypes = {
component: PropTypes.string
};
Fashion.defaultProps = {
component: 'Fashion'
};
