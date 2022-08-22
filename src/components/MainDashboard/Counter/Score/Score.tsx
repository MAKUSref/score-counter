import PointNumber from './PointNumber';

const Score = () => {
  return (
    <div className="score">
      <div className="set">5</div>
      <div className="points">
        <PointNumber />
        <PointNumber />
      </div>
    </div>
  );
};

export default Score;
