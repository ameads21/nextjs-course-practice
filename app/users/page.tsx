interface User {
  id: number;
  name: string;
  username: string;
}

const UsersPage = async () => {
  // Revalidate = Makes that same api call every x I believe seconds
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}})
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
  const users: User[] = await res.json();
  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleString()}</p>
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
};

export default UsersPage;
