import axios from "axios";
import ArticleDetails from "@components/blog-details";

function blog({ article }){
    return (
        <ArticleDetails article={article} />
    );
}

export default blog;


export async function getStaticProps(context){
    try{
        const slug = context.params.slug;
        let { data: article } = await axios.get(`${process.env.API_BASE_URL}/articles/${slug}`);
        if(article.image) article.image.url = `${process.env.API_BASE_URL}${article.image.url}`;
        if(article.author.picture) article.author.picture.url = `${process.env.API_BASE_URL}${article.author.picture.url}`;
        return {
            props: {
                article: article || null
            }
        }
    }catch(error){
        console.log(error);
        return {
            props: {
                article: null
            }
        };
    }
}

export async function getStaticPaths(){
    
    let { data: articles } = await axios.get(`${process.env.API_BASE_URL}/articles`);

    let paths = articles.map((article) => { return { params: { slug: article.slug }}});
    
    return {
        paths,
        fallback: false
    }
}   