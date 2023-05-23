//全ユーザーの情報を取得する
import { useState } from "react";
import { UserProfiles } from "../types/userProfiles";
import { User } from "../types/api/User";
import axios from "axios";

export const useAllUsers = () => {
  const [userProfile, setUserProfile] = useState<Array<UserProfiles>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfile(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { getUsers, userProfile, loading, error };
};
