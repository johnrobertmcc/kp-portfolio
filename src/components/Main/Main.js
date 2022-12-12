import styles from './Main.module.scss';
import Container from 'components/Container';
import cn from 'classnames';

/**
 * Renders the Main Component
 *
 * @author  John Robert McCann
 * @since   12/11/2022
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.component The name of the component.
 * @return  {Element}                 The Main component.
 */
export default function Main({ children }) {
  return (
    <Container tag="main" className={cn(styles.main)}>
      {children}
    </Container>
  );
}
