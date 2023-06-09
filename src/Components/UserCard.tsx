import { VFC } from "react";
import { UserProfiles } from "../types/userProfiles";
type Props = {
  user: UserProfiles;
};
export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <div>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
