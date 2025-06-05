import styles from './VoteOptions.module.css';
import { type VoteType } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  const handleGood = () => onVote('good');
  const handleNeutral = () => onVote('neutral');
  const handleBad = () => onVote('bad');

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleGood}>
        Good
      </button>
      <button className={styles.button} onClick={handleNeutral}>
        Neutral
      </button>
      <button className={styles.button} onClick={handleBad}>
        Bad
      </button>
      {canReset && (
        <button
          className={`${styles.button} ${styles.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
