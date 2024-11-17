
import { Route, Routes,  } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Search from './component/search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Search' element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
