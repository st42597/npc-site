import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
