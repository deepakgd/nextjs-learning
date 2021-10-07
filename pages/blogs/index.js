import axios from "axios";
import BlogListing from "@components/blog-listing";

function ListBlogs({ artilces, baseUrl }) {
    return (
        <div className="container">
            <h1>Articles page</h1>

            <BlogListing  artilces={artilces} baseUrl={baseUrl} />

            

            
        </div>
    );
}

export default ListBlogs;


export async function getStaticProps(){
    try{

        let response = await axios.get(`${process.env.API_BASE_URL}/articles`);
        console.log(response);
        return {
            props: {
                artilces: response.data,
                baseUrl: process.env.API_BASE_URL
            }
        }

    }catch(error){
        console.log(error);
        return {
            props: {
                artilces: [],
            }
        }
    }
}