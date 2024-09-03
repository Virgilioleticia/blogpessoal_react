import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import FormularioTema from "./components/temas/formulariotemas/FormTemas";
import ListaTemas from "./components/temas/listatema/listaTema";
import DeletarTema from "./components/temas/deletartema/DeletarTema";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens";
import FormularioPostagem from "./components/postagens/formpostagens/FormPostagens";
import DeletarPostagem from "./components/postagens/deletarpostagens/DeletarPostagens";
import Perfil from "./pages/perfil/Perfil";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";




function App() {
  // Código TypeScript

  return (
   // Código TSX => HTML + CSS
    <>
       
       <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>

  );
}

export default App;
