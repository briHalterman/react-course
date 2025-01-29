import './App.css';
import Button from './components/Button';
import Heading from './components/Heading';

function App() {
  function printCheesecode() {
    console.log('cheesecode');
  }

  return (
    <div>
      {/* <img
        src="https://i.pinimg.com/736x/30/f2/3c/30f23c4db8e72dff05acb4fb076cd22d.jpg"
        width="100"
        height="100"
        id="50"
        // cheesecode=""
      /> */}

      {/* <button>Thank you</button>
      <button>Thank you</button>
      <button>Thank you</button>
      <button>Thank you</button> */}

      <Button
        whenButtonIsClicked={printCheesecode}
        label="Click Me!"
        id="special"
        cheesecode={'cheesy-code'}
      />
      <Button label="Submit" id="something-else">
        Closing something
      </Button>
      <h2>Hello</h2>
      <Heading items={[1, 2, 3]} />
      <Button label="Hello!" id="how-are-you" />
      <Button />
      <Button label="Yoyo" />
      <h3>How are you</h3>
      <Heading items={['hello', 'hi']} />
      <Button>
        <p>Hello</p>
        <Heading />
      </Button>
    </div>
  );
}

// class Button...

// function sum(num1, num2) {
//   return num1 + num2;
// }

// const total = sum(10, 20);

export default App;
