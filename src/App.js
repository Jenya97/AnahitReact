
import A from './Counter';
import './App.css'
import Nav from './Header/Nav';
import Example from './Example';
import Func from './FuncComponent';
import Form from './Form';

function App() {
  return (
    <div>
  <A number='5'/>
  <Nav/>
  <Example name='example'/>
  <Func name="f1"/>
  <Func name="f2"/>
  <Func name="f3"/>
  <Func name="f4"/>
  <Form/>
    </div>
  );
}

export default App;
