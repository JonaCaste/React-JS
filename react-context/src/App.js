import './App.css';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext';

function App() {
  return (
    <div className="App">
      <h1>Context App</h1>
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
