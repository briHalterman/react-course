import './App.css';
import Button from './components/Button';
import Heading from './components/Heading';

function App() {
  return (
    <div>
      {/* <button>Thank you</button>
      <button>Thank you</button>
      <button>Thank you</button>
      <button>Thank you</button> */}

      <Button />
      <Button />
      <h2>Hello</h2>
      <Heading />
      <Button />
      <Button />
      <Button />
      <h3>How are you</h3>
      <Heading />
    </div>
  );
}

// class Button...

// function sum(num1, num2) {
//   return num1 + num2;
// }

// const total = sum(10, 20);

export default App;
