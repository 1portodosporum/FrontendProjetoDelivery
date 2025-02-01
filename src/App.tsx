import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/login/Login';
import ListarPedidos from './components/pedido/listarpedidos/ListarPedidos';
import { FormProduto } from './components/produto/formproduto/FormProduto';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { FormPedido } from './components/pedido/formpedido/FormPedido';
import ListarProdutos from './components/produto/listarproduto/ListarProdutos';
import ListarMeusPedidos from './components/pedido/listarmeuspedidos/ListarMeusPedidos';


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <header className='sticky top-0 z-50'>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cardapio" element={<ListarProdutos />} />
              <Route path="/pedidos" element={<ListarPedidos />} />
              <Route path="/meuspedidos" element={<ListarMeusPedidos />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/cadastrarproduto/:id" element={<FormProduto />} />
              <Route path="/cadastrarpedido" element={<FormPedido />} />
            </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
