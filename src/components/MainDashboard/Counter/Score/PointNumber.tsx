interface digit {
  num: string;
  addSmallPoint: () => void;
}

const PointNumber = ({ num, addSmallPoint }: digit) => {
  return (
    <div className="point-number" onClick={addSmallPoint}>
      {num}
    </div>
  );
};

export default PointNumber;
