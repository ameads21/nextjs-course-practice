interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  // Revalidate = Makes that same api call every x I believe seconds
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}})
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
