import PropTypes from 'prop-types';
import styles from './NavLinks.module.scss';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { NAV_LINKS } from 'constants';

/**
 * Renders the app's Links based on the authenticated state.
 *
 * @author  John Robert McCann
 * @since   08/27/2022
 * @version 1.0.0
 * @param  {object}   props              The component as props.
 * @param  {string}   props.className    Optional className for the provided <ul/>.
 * @param  {string}   props.list         The links to provide into the <ul /> element.
 * @return {Element}                     The NavLinks component.
 */
export default function NavLinks({ className, links }) {
  const { pathname = null } = useLocation();
  console.log('jr pathname', pathname);

  return (
    <ul className={cn(className ? className : styles.list)}>
      {links?.map((link, i) => {
        if (link?.protected) {
          return null;
        }

        return (
          <li
            className={cn(
              styles.link,
              pathname === link?.url && styles.currentPath
            )}
            key={i}
          >
            <Link to={link?.url}>{link?.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
NavLinks.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      protected: PropTypes.bool,
    })
  ),
};

NavLinks.defaultProps = {
  className: null,
  links: NAV_LINKS,
};
