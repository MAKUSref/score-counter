import Counter from './Counter/Counter';
import NavBar from './Navbar/Navbar';

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <Counter />
      <NavBar />
    </div>
  );
};

export default MainDashboard;
