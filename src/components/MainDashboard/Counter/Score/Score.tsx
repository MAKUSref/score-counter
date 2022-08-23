import PointNumber from './PointNumber';

interface playerScore {
  bigPoints: number;
  smallPoints: number;
  addSmallPoint: () => void;
  addBigPoint: () => void;
}

const Score = ({ bigPoints, smallPoints, addSmallPoint }: playerScore) => {
  const getOnesPlace = (num: number) => {
    if (num < 10) return num.toString().substring(0, 1);
    else return num.toString().substring(2, 1);
  };

  const getTensPlace = (num: number) => {
    if (num < 10) return '0';
    else return num.toString().substring(0, 1);
  };

  return (
    <div className="score">
      <div className="big-points">{bigPoints}</div>
      <div className="small-points">
        <PointNumber num={getTensPlace(smallPoints)} addSmallPoint={addSmallPoint} />
        <PointNumber num={getOnesPlace(smallPoints)} addSmallPoint={addSmallPoint} />
      </div>
    </div>
  );
};

export default Score;
