import { useState } from 'react';
import Score from './Score/Score';

const Counter = () => {
  const [smallPoints1, setSmallPoints1] = useState<number>(0);
  const [smallPoints2, setSmallPoints2] = useState<number>(0);
  const [bigPoints1, setBigPoints1] = useState<number>(0);
  const [bigPoints2, setBigPoints2] = useState<number>(0);

  const addSmallPoint1 = () => {
    setSmallPoints1(smallPoints1 + 1);
  };

  const addSmallPoint2 = () => {
    setSmallPoints2(smallPoints2 + 1);
  };

  const addBigPoint1 = () => {
    setBigPoints1(bigPoints1 + 1);
  };

  const addBigPoint2 = () => {
    setBigPoints2(bigPoints2 + 1);
  };

  return (
    <div className="counter">
      <Score
        smallPoints={smallPoints1}
        bigPoints={bigPoints1}
        addSmallPoint={addSmallPoint1}
        addBigPoint={addBigPoint1}
      />
      <div className="vs">:</div>
      <Score
        smallPoints={smallPoints2}
        bigPoints={bigPoints2}
        addSmallPoint={addSmallPoint2}
        addBigPoint={addBigPoint2}
      />
    </div>
  );
};

export default Counter;
