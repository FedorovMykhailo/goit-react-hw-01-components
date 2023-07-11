import Profile from "../components/Profile/Profile.jsx"
import Statistics from "../components/Statistics/Statistics.jsx"
import FriendsList from "../components/FriendList/FriendList.jsx"
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx"
import user from "../../src/user.json"
import data from "../../src/data.json"
import friends from "../../src/friends.json"
import transactions from "../../src/transactions.json"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        fontSize: 20,
        color: '#010101',
        margin: 0,
        padding: 0,
      }}
    >
      
      <Profile
        username={user.username}
        tag = {user.tag}
        location = {user.location}
        avatar={user.avatar}
        stats = {user.stats}
      />
      
      <Statistics title="Upload Stats" data={data}></Statistics>

      <FriendsList friends={friends}></FriendsList>

      <TransactionHistory items={transactions} />

    </div>
  );
};
