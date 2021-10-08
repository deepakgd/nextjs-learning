import PropTypes from 'prop-types';
import Moment from 'react-moment';

import styles from "./styles.module.css";

export default function BlogHeader({ title, author, publishedAt }) {
  return (
    <div>
      <h1 className={styles.articleHeader}>{title}</h1>
      <div className={styles.subtitle}>
          <div className={styles.spaceRight}><b>Author</b>: {author}</div>
          <div><b>Published at</b>: <Moment date={publishedAt} format="DD-MM-YYYY" /></div>
      </div>
    </div>
  );
}


BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired
}