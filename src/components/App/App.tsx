import { useState } from 'react';
import styles from './App.module.css';
import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../Cafeinfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import Notification from '../Notification/Notification';
import VoteStats from '../VoteStats/VoteStats';

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const handleReset = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={styles.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={handleReset}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
