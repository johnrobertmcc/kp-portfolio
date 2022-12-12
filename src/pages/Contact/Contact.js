import PropTypes from 'prop-types';
import styles from './Contact.module.scss';
/**
* Renders the Contact Component
*
* @author  John Robert McCann
* @since   12/11/2022
* @version 1.0.0
* @param   {object}  props           The component destructured as props.
* @param   {string}  props.component The name of the component.
* @return  {Element}                 The Contact component.
*/
export default function Contact({component}) {
  return <p className={styles.string}>{component} component</p>;
}
Contact.propTypes = {
component: PropTypes.string
};
Contact.defaultProps = {
component: 'Contact'
};
