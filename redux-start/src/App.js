import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';
import TodoListContainer from './containers/TodoListContainer';
import FormContainer from './containers/FormContainer';
import Example8 from './components/Example8';
import Example9 from './components/Example9';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example8 />
        <Example9 />
        <TodoListContainer />
        <FormContainer />
      </header>
    </div>
  );
}

export default App;
