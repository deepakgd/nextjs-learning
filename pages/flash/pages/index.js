export const getStaticProps = async () => {
  try {
    console.log("requesting....")
    /* this code will run only in build time in production mode or compile time in dev mode */
    const response = await fetch(
      "https://flash-ent-cms.eu-staging.kacdn.net/pages?active_eq=true"
    );
    const data = await response.json();

    console.log(data)

    return {
      props: { pages: data },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);
  }
};

const pages = ({ pages }) => {
  return (
    <>
      <h1>Pages list</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Slug</th>
        </tr>
        {pages.map((page) => {
          return (
            <tr key={page.id}>
              <td>{page.title}</td>
              <td>{page.slug}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default pages;
