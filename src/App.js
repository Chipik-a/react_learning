import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

const Field = () => {
  const holder = 'Enter here';
  const styledField = {
    width: '300px'
  };

  return <input 
          placeholder="Type here" 
          type="text" 
          style={styledField} />
}

function Btn() {
  // const text = "Log in";
  // return <button>{text}</button>
  // const res = () => {
  //   return 'Log in.';
  // }
  // const p = <p>Log in</p>
  // return <button>{3+4}</button>
  const text = 'Log in';
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export default App;
