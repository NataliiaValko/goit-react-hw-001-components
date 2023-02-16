// import Container from './components/common/Container';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

import userData from 'data/user.json';
import dataData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={dataData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </>
  );
};

export default App;
