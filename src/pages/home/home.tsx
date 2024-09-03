import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModelPostagens from "../../components/postagens/modalpostagens/ModalPostagens";


function Home() {
    return (
      <>
        <div className="bg-gradient-to-b from-emerald-600 to-emerald-800 flex justify-center">

        <div className="container grid grid-cols-2 text-white">

          <div className="flex flex-col gap-4 items-center justify-center py-4">

            <h2 className="text-5xl font-bold">
                Seja Bem-Vindo!</h2>

            <p className="text-xl">
                Expresse aqui seus pensamentos e opiniões.</p>

                <div className="flex justify-around gap-4">
                  <ModelPostagens/>
                    {/* <button className="rounded font-bold border-white border-solid border-2 py-2 px-4">
                        Ver Postagens
                    </button> */}
                </div>

          </div>
          <div className="flex justify-center mb-10">
            <img src="https://ik.imagekit.io/e5otp0bxb/358c6910e5e6f49b4b5ed3e377a9a4c8.gif?updatedAt=1725395073504" alt="Imagem da Página Home" 
            className="w-3/4 h-64 rounded-lg object-cover"
            />

          </div>
        </div>
      </div>
      <ListaPostagens />
      </>
    );
  }
  
  export default Home;