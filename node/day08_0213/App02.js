import logo from './logo.svg';
import './App.css';
// 난수를 발생하여 리로드할때 마다 이름 달리 출력 
function App() {
  const name = 'jemicom';
  const handleNameChange = ()=>{
    const names = ['kim', 'lee', 'park'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hello { handleNameChange() }!!
        </p>
      </header>
    </div>
  );
}

export default App;
