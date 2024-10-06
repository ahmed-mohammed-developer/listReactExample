import './App.css';
import ObjectList from './list/ObjectList';
import SimpleList from './list/SimpleList';
import ConditionalList from './list/ConditionalList'
import ListItem from './list/ListItem';
import UserInput from './list/UserInput';
import DeletableList from './list/DeletableList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SimpleList />
      <ObjectList />
      <ConditionalList />
      <ListItem />
      <UserInput />
      <DeletableList />
      </header>
    </div>
  );
}

export default App;
