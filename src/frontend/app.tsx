/** @format */
import './main.scss';
import pickle from '../assets/pickle.jpg';
import Signin from './Signin';

const App = (): JSX.Element => {
  return (
    <div>
      "PPPICKLE"
      <img src={pickle} alt="It's a pickle!!!"></img>
      <Signin></Signin>
    </div>
  );
};

export default App;
