import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PlayerForm from './components/PlayerForm';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>Welcome to your scoreboard </h1>
      <PlayerForm/>
      <Timer/>
    </div>
  );
}

export default App;
