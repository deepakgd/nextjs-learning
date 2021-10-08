import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

import BlogHeader from "@components/blog-header";
import BlogBanner from "@components/blog-banner";

export default function ArticleDetails({ article }) {
  return (
    <div className="container-fluid">
        <BlogHeader title={article.title} author={article.author.name} publishedAt={article.published_at} />
        <BlogBanner image={article.image.url} />
        {/* <p className={styles.description}>{article.description}</p> */}
        <br />
        <div className="row">
            <div className="col-md-8 col-sm-8 col-lg-8 col-xs-12 justify-text">
                <ReactMarkdown>
                    {article.content}
                </ReactMarkdown>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
                <div className={styles.author}>
                    <div className={styles.authorTitle}>
                        <b>Author</b>
                    </div>
                    <img src={article.author.picture.url} width="300" />
                    <div className={styles.authorDetails}>
                        <b>Name: </b> {article.author.name}
                    </div>
                    <div className={styles.authorDetails}>
                        <b>Email: </b> {article.author.email}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}
