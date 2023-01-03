import PropTypes from 'prop-types';
import styles from './ArticleList.module.scss';
import { useRef } from 'react';
import Link from 'next/link';
import Container from 'components/layout/Container';

/**
 * Renders a section with a list of articles written by author.
 *
 * @author  John Robert McCann
 * @since   12/13/2022
 * @version 1.0.0
 * @param   {array}   articles The articles to loop through and create cards.
 * @param   {string}  heading  The page heading.
 * @param   {string}  intro    The introductory spiel.
 * @param   {object}  nextPage What page to link to next.
 * @return  {Element}          The <article /> with the appropriate information.
 */
export default function ArticleList({
  articles,
  heading,
  intro,
  nextPage,
  prevPage,
}) {
  const linkRefs = useRef({});

  return (
    <Container tag="article" className={styles.page}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {intro && <p className={styles.intro}>{intro}</p>}
      {!!articles?.length && (
        <ul className={styles.articleList}>
          {articles.map((article = {}, i) => {
            const {
              img = 'https://picsum.photos/id/240/200/300',
              title = null,
              url = null,
              alt = null,
            } = article;

            return (
              <li
                key={i}
                className={styles.articleItem}
                onClick={() => linkRefs?.current?.[i].click()}
              >
                <div className={styles.imgContainer}>
                  <img src={img} alt={alt || title} className={styles.image} />
                </div>
                {url && title && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    ref={(el) => (linkRefs.current[i] = el)}
                  >
                    {title}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <div className={styles.navContainer}>
        {prevPage && <Link href={prevPage?.url}>{prevPage?.title} </Link>}
        {nextPage && <Link href={nextPage?.url}>{nextPage?.title} </Link>}
      </div>
    </Container>
  );
}
ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      alt: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  heading: PropTypes.string,
  intro: PropTypes.string,
  nextPage: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
  prevPage: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};

ArticleList.defaultProps = {
  nextPage: null,
  prevPage: null,
};
