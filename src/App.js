
import A from './Counter';
import './App.css'
import Nav from './Header/Nav';
import Example from './Example';
function App() {
  return (
    <div>
  <A number='5'/>
  <Nav/>
  <Example name='example'/>
    </div>
  );
}

export default App;
