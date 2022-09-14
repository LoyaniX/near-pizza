import logo from './logo.svg';
import './App.css';

import Cover from './components/Welcome';
import welcomeLogo from './assets/welcome-slice.svg';
import welcomeCorner from './assets/welcome-corner.png';
import nearIcon from './assets/near_icon.png';

function App() {
  return (
    <div className="App">
      <Cover welcomeImg={welcomeLogo} welcomeCorner={welcomeCorner} buttonIcon={nearIcon} />
    </div>
  );
}

export default App;
