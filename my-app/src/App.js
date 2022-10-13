import logo from './logo.svg';
import './App.css';
import Statefulgreeting from './components/Statefulgreeting';
import StatefulgreetingWithCallback from './components/StatefulGreetingWithCallBack';

function App() {
  return (
    <div className="App">
      {/* <Statefulgreeting name="patrick" /> */}
      <StatefulgreetingWithCallback />
    </div>
  );
}

export default App;
