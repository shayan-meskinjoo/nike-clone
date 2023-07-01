import './components/general-styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import ProductsList from './ProductsList/ProductsList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='men' element={<Men />}/>
            <Route path='productslist' element={<ProductsList />}/>
            <Route path='women' element={<Women />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
