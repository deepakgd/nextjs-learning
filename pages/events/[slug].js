function EventDetails({ event }){
    return (
        <>
        {event && (
            <div>
                <h1>{event.title}</h1>
                <div>
                    {event.markdown}
                </div>
            </div>
        )}
        </>
        
    );
}


export default EventDetails;

export async function getStaticProps(context){
    let { params } = context;
    try{
        let data = await fetch(`https://flash-ent-cms.eu-staging.kacdn.net/events/find/${params.slug}`);
        data = await data.json();
        if(data && data.message === "no data found") {
            return {
                notFound: true,
            }
        }
        return {
           
            props: {
                event: data
            }
        }
    }catch(e){
        console.log("error part invoked")
        return {
            props: {
                event: null
            }
        }
    }
   

   
}


export async function getStaticPaths(){
    let response = await fetch("https://flash-ent-cms.eu-staging.kacdn.net/events");
    response = await response.json();
    let paths = response.map((item)=>{
        return { params: { slug: item.slug } }
    });
    
    return {
        paths: paths,
        fallback: true
    }
}