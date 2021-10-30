/** @format */

import pickle from '../assets/pickle.jpg';
import Feed from './Feed';

const App = (): JSX.Element => {
  return (
    <div>
      "PPPICKLE"
      <img src={pickle} alt="It's a pickle!!!"></img>
      <Feed></Feed>
    </div>
  );
};

export default App;
