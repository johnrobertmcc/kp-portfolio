import PropTypes from 'prop-types';
/**
 * Renders the BarsIcon Component
 *
 * @author  John Robert McCann
 * @since   12/14/2022
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.component The name of the component.
 * @return  {Element}                 The BarsIcon component.
 */
export default function BarsIcon({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={width}
      height={height}
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}
BarsIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
BarsIcon.defaultProps = {
  width: '75px',
  height: '20px',
};
