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
      props: { users: data },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);
  }
};

const Users = ({ users }) => {
  return (
    <>
      <h1>Users list</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Slug</th>
        </tr>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.title}</td>
              <td>{user.slug}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Users;
