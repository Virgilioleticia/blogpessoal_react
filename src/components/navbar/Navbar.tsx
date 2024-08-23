function Navbar() {

    return (
      <>
       <div className="w-full bg-emerald-400 text-white flex justify-center py-4">
            <div className="container flex justify-between text-lg">
            <div className="text-2xl font-bold uppercase ml-4">Blog Pessoal</div>

              <div className="flex gap-4">
                <div className="hover:underline font-bold">Postagens</div>
                <div className="hover:underline font-bold">Temas</div>
                <div className="hover:underline font-bold">Cadastrar tema</div>
                <div className="hover:underline font-bold">Perfil</div>
                <div className="hover:underline font-bold mr-4">Sair</div>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar