import './App.css';
import Search from './containers/Search/Search';

function App() {
  return (
    <div className="App">
      <h2>My iFinance App</h2>
      <h4>Create your custom portfolio by searching for stocks below</h4>
      <Search />
    </div>
  );
}

export default App;
