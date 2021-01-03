import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';
import TodoListContainer from './containers/TodoListContainer';
import FormContainer from './containers/FormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer />
        <FormContainer />
      </header>
    </div>
  );
}

export default App;
