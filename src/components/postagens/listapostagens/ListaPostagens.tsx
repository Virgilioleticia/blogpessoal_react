import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../service/Service';
import CardPostagem from '../cardpostagens/CardPostagens';
import { ToastAlert } from '../../../utils/ToastAlert';


function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlert("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar("/postagens", setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlert("O token expirou, favor logar novamente", "info")
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);
  return (
    <>
      {postagens.length === 0 && (
      <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                  <div key={index} className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md animate-pulse">
                      <header className="py-2 px-6 bg-emerald-600 text-white font-bold text-2xl">Postagens</header>
                      <div className="p-8 bg-sky-50 flex-grow">
                          <div className="h-4 bg-emerald-600 rounded w-3/4 mb-4"></div>
                          <div className="h-3 bg-emerald-600 rounded w-full mb-2"></div>
                          <div className="h-3 bg-emerald-600 rounded w-5/6"></div>
                      </div>
                      <div className="flex">
                          <div className="w-full font-bold text-slate-100 bg-slate-500 flex items-center justify-center py-2">
                              <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                          </div>
                          <div className="w-full font-bold text-slate-100 bg-slate-600 flex items-center justify-center">
                              <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  </div>


      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postagens.map((postagem) => (
          <CardPostagem key={postagem.id} post={postagem} />
        ))}
      </div>
    </>
  );
}

export default ListaPostagens;