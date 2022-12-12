import PropTypes from 'prop-types';
import styles from './About.module.scss';
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
export default function About({component}) {
  return <p className={styles.string}>{component} component</p>;
}
About.propTypes = {
component: PropTypes.string
};
About.defaultProps = {
component: 'About'
};
