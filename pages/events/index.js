import Link from 'next/link';

function ListEvents({ events = [] }){

    return (
        <>
            {(events && events.length > 0) ? (
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Slug</th>
                        <th>Title</th>
                        <th>View</th>
                    </tr>
                    </thead>
                    <tbody>
                    {events.map((event, index) => {
                        return (
                            <tr key={`event_${index}`}>
                                <td>{index + 1}</td>
                                <td>{event.slug}</td>
                                <td>{event.title}</td>
                                <td>
                                    <Link href={`/events/${event.id}`} passHref>
                                        <button type="button" className="btn btn-primary">View</button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            ): (
                <div><b>No data found</b></div>
            )}
        </>
    );
}

export default ListEvents

export async function getStaticProps(){
    try{
        let response = await fetch("https://flash-ent-cms.eu-staging.kacdn.net/events");
        response = await response.json();
        return {
        props: {
            events: response
        }
    }
    }catch(error){
        console.log(error);
        return {
            props: {
                events: null
            }
        }
    }
    
    
}