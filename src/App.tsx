import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
