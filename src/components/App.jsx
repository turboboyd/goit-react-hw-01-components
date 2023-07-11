import userData from './Profile/user.json';
import statisticsData from './Statistics/data.json';
import friendsData from './FriendListItem/friends.json';
import transactionHistoryData from './TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.conteiner}>
      <div className={css.conteinerProfile}>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistics title="Upload stats" stats={statisticsData} />
      </div>
      <TransactionHistory transaction={transactionHistoryData} />
      <FriendList friends={friendsData} />
    </div>
  );
};
