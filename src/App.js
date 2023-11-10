import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProductsPage from './Pages/AllProductsPage/AllProductsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
