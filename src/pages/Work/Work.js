import PropTypes from 'prop-types';
import styles from './Work.module.scss';
/**
* Renders the Work Component
*
* @author  John Robert McCann
* @since   12/11/2022
* @version 1.0.0
* @param   {object}  props           The component destructured as props.
* @param   {string}  props.component The name of the component.
* @return  {Element}                 The Work component.
*/
export default function Work({component}) {
  return <p className={styles.string}>{component} component</p>;
}
Work.propTypes = {
component: PropTypes.string
};
Work.defaultProps = {
component: 'Work'
};
