import "./styles.css";
import { UserCard } from "./Components/UserCard";
import { useAllUsers } from "./hooks/useALLUSERS";

const mitame = {
  border: "solid 1px #ccc",
  borderRadius: "9px",
  padding: "0px 16px"
};
export default function App() {
  const { getUsers, userProfile, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div style={mitame}>
      <button onClick={onClickFetchUser}>データを抽出</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loding...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
