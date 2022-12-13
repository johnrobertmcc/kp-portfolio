import PropTypes from 'prop-types';
import styles from './Proptech.module.scss';
/**
* Renders the Proptech Component
*
* @author  John Robert McCann
* @since   12/12/2022
* @version 1.0.0
* @param   {object}  props           The component destructured as props.
* @param   {string}  props.component The name of the component.
* @return  {Element}                 The Proptech component.
*/
export default function Proptech({component}) {
  return <p className={styles.string}>{component} component</p>;
}
Proptech.propTypes = {
component: PropTypes.string
};
Proptech.defaultProps = {
component: 'Proptech'
};
