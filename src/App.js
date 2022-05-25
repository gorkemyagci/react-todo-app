import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App container">
      <AddTodo/>
      <div className='todos mt-5'>
      <Todos/>
      </div>
      <p id='err'></p>
    </div>
  );
}

export default App;
