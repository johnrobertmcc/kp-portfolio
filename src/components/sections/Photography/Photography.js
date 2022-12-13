import PropTypes from 'prop-types';
import styles from './Photography.module.scss';
/**
* Renders the Photography Component
*
* @author  John Robert McCann
* @since   12/12/2022
* @version 1.0.0
* @param   {object}  props           The component destructured as props.
* @param   {string}  props.component The name of the component.
* @return  {Element}                 The Photography component.
*/
export default function Photography({component}) {
  return <p className={styles.string}>{component} component</p>;
}
Photography.propTypes = {
component: PropTypes.string
};
Photography.defaultProps = {
component: 'Photography'
};
