import Work from 'components/pages/Work';
import { NAV_LINKS } from 'constants';

export default function HomePage(props) {
  console.log('jr props', props);
  const { links = null } = props;
  if (!links) {
    return null;
  }

  return 'home page';
}

/**
 * Get server side props.
 *
 * @param  {object} ctx        The context object.
 * @param  {object} ctx.req    The request headers.
 * @param  {string} ctx.locale The current app locale.
 * @return {object}            Server side props.
 */
export async function getStaticProps({ req, locale }) {
  return {
    props: {
      links: NAV_LINKS || null,
    },
  };
}
