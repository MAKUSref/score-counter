import Score from './Score/Score';

const Counter = () => {
  return (
    <div className="counter">
      <Score />
      <div className="vs">:</div>
      <Score />
    </div>
  );
};

export default Counter;
