// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

function App() {
  const NAME = "CipherSchools";
  return (
    <div>
      <div>
        <h1
          style={{
            color: "red",
            textAlign: "center"
          }}
        >Hello From {NAME}</h1>
      </div>
      <div>
        <p>This is {NAME}</p>
      </div>
    </div>
  );
}

export default App;
