import styles from './styles.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';
function BlogListing({ artilces, baseUrl }){
    return (
        <>
        {artilces && artilces.length && (
                <div className={styles.articleContainer}>
                    {artilces.map((article, index) => {
                        return (
                            <div className={["card", styles.customcard].join(" ")} key={"card_"+index}>
                                <img src={baseUrl+article.image.url} className="card-img-top" />
                                <div className={["card-body", styles.customCardBody].join(" ")}>
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <Link href={`/blogs/${article.slug}`}><a className={["btn", "btn-primary", styles.viewArticle].join(" ")}> View </a></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}   

BlogListing.propTypes = {
    artilces: PropTypes.array,
    baseUrl: PropTypes.string
};

export default BlogListing