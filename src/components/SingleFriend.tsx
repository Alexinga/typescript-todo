import { arrayProps } from "../App";
type SingleFriendProps = {
  friend: arrayProps;
  deleteList: (id: number) => void;
};

function SingleFriend({ friend, deleteList }: SingleFriendProps) {
  return (
    <li className="grid grid-cols-3 text-center pt-4 items-center gap-4">
      <h2>{friend.name}</h2>
      <p>{friend.desc}</p>
      <button
        className="text-sm border-2 bg-cyan-500 text-white w-1/2 rounded-lg"
        onClick={() => deleteList(friend.id)}
      >
        X
      </button>
    </li>
  );
}

export default SingleFriend;
