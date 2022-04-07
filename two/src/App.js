import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, minus } from './redux/state/counterReducer';
import LogedLogic from './components/LogedLogic';
import { logout } from './redux/state/loginReducer';
function App() {
  const { counterReducer } = useSelector((store) => store);
  const dispach = useDispatch();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ color: 'red' }}>number is : {counterReducer}</h1>
        <button onClick={() => dispach(add(5))}>add</button>
        <button onClick={() => dispach(minus(5))}>minus</button>
        <LogedLogic />
        <button onClick={() => dispach(logout())}>
          <h1>logg u the fuck out</h1>{' '}
        </button>
      </header>
    </div>
  );
}

export default App;
