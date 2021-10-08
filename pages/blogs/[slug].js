import axios from "axios";

function blog({ blog }){
    return (
        <div>
            Blog title
        </div>
    );
}

export default blog;


export async function getStaticProps(context){
    try{
        const slug = context.params.slug;
        let article = await axios.get(`${process.env.API_BASE_URL}/articles/${slug}`);
        return {
            props: {
                article: article.data || null
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