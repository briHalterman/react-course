import styles from './App.module.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';

function App() {
  function printCheesecode() {
    console.log('cheesecode');
  }

  return (
    <div>
      <Button
        whenButtonIsClicked={printCheesecode}
        label="Click Me!"
        id="special"
        cheesecode={3}
      />
      <Button label="Submit" id="something-else">
        Closing something
      </Button>
      <h2 className={styles.heading}>Hello</h2>
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

export default App;
