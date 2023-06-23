import { useUser } from "./stores/user";

export default function UserInfo() {
  const [username, email] = useUser((state) => [state.username, state.email]);

  return (
    <>
      <div>
        <h2>User Infos</h2>
        <div>Name : {username}</div>
        <div>Email : {email}</div>
      </div>
    </>
  );
}
