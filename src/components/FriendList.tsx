import SingleFriend from "./SingleFriend";
import { arrayProps } from "../App";
type FriendListProps = {
  friendArray: arrayProps[];
  deleteList: (id: number) => void;
};
function FriendList({ deleteList, friendArray }: FriendListProps) {
  return (
    <ul>
      {friendArray.map((friend) => (
        <SingleFriend friend={friend} deleteList={deleteList} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendList;
