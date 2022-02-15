import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'jemicom';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          나의 첫번째 리엑트 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> react </p>
        <p>{' react '}</p>
        <p>{ 2022 }</p>
        <p>{ [2,0,2,2] }</p>
        <p>[2,0,2,2]</p>
        <p>{ [2,0,2,2] }</p>
        {/* <p>{ {a:1,b:2}}   // error</p> */}
        <p>{ true === false } </p>
        <p>{ 10 == 4  } // 값이 보이진 않고 </p>
        <p>{ name } 함수변수값 출력  </p>
      </header>
      {/* <p> react </p> */}
    </div>
  );
}

export default App;
