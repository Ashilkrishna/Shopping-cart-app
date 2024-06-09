import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import NavBar from './components/NavBar';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <Add/>
      <Search/>
      <Delete/>
      <ViewAll/>
    </div>
  );
}

export default App;
