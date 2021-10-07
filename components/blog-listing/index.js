import styles from './styles.module.css';

export default function BlogListing({ artilces, baseUrl }){
    return (
        <>
        {artilces && artilces.length && (
                <div className={styles.articleContainer}>
                    {artilces.map((article, index) => {
                        return (
                            <div className={["card", styles.card].join(",")} key={"card_"+index}>
                                <img src={baseUrl+article.image.url} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}   