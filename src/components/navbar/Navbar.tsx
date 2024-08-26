import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"
import { useContext } from "react"


function Navbar() {

  const navigate = useNavigate();

  const { handleLogout} = useContext(AuthContext)

  function logout(){
    handleLogout();
    alert("O usuario foi desconectado com sucesso");
    navigate("/")
  }

    return (
      <>
       <div className="w-full bg-emerald-400 text-white flex justify-center py-4">
            <div className="container flex justify-between text-lg">

            <Link to="/home" className="text-2x1 font-bold ml-4"> Blog Pessoal </Link>

              <div className="flex gap-4">
              <Link to="/login" className="hover:underline font-bold">Login</Link>
              <Link to="/home" className="hover:underline font-bold">Home</Link>
                <div className="hover:underline font-bold">Postagens</div>
                <div className="hover:underline font-bold">Temas</div>
                <div className="hover:underline font-bold">Cadastrar tema</div>
                <div className="hover:underline font-bold">Perfil</div>
                <div className="hover:underline font-bold mr-4"> <Link to='' onClick={logout} className="hover:underline"> Sair </Link> </div>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar