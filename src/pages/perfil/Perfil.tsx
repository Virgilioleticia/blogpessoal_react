import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlert } from '../../utils/ToastAlerta'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlert("Você precisa estar logado", "info")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className="m-4 mx-auto rounded-2xl overflow-hidden container">

            <img 
                className="border-white border-b-8 w-full h-72 object-cover"
                src="https://ik.imagekit.io/e5otp0bxb/20e92227c9b739044e377b3567cfdac0.gif?updatedAt=1725379821848" alt="Capa do Perfil" />

            <img 
                className="relative z-10 border-8 border-white mx-auto mt-[-8rem] rounded-full w-56"
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div 
                className="relative flex flex-col justify-center items-center bg-emerald-600 mt-[-6rem] h-72 text-2xl text-white"
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil


// import { useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../contexts/AuthContext'
// import { ToastAlert } from '../../utils/ToastAlerta'

// function Perfil() {

//     const navigate = useNavigate()

//     const { usuario } = useContext(AuthContext)

//     useEffect(() => {
//         if (usuario.token === "") {
//             ToastAlert("Você precisa estar logado", "info")
//             navigate("/")
//         }
//     }, [usuario.token])

//     return (
//         <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gray-100">

//             <img 
//                 className="border-white border-b-8 w-full h-72 object-cover"
//                 src="https://ik.imagekit.io/e5otp0bxb/20e92227c9b739044e377b3567cfdac0.gif?updatedAt=1725379821848" alt="Capa do Perfil" />

//             <img 
//                 className="relative z-10 border-8 border-white mx-auto mt-[-8rem] rounded-full w-56"
//                 src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

//             <div 
//                 className="relative flex flex-col justify-center items-center bg-emerald-800 mt-[-6rem] h-72 w-full text-2xl text-white"
//             >
//                 <p>Nome: {usuario.nome} </p>
//                 <p>Email: {usuario.usuario}</p>
//             </div>

//         </div>
//     )
// }

// export default Perfil





// //////////////////////////////////////////////////////////////////////////////////////////

// import { useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../contexts/AuthContext'
// import { ToastAlert } from '../../utils/ToastAlerta'

// function Perfil() {

//     const navigate = useNavigate()

//     const { usuario } = useContext(AuthContext)

//     useEffect(() => {
//         if (usuario.token === "") {
//             ToastAlert("Você precisa estar logado", "info")
//             navigate("/")
//         }
//     }, [usuario.token])

//     return (
//         <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

//             {/* Conteúdo Principal */}
//             <div className="flex flex-col items-center w-full">
//                 <img 
//                     className="border-white border-b-8 w-full h-72 object-cover"
//                     src="https://ik.imagekit.io/e5otp0bxb/20e92227c9b739044e377b3567cfdac0.gif?updatedAt=1725379821848" alt="Capa do Perfil" />

//                 <img 
//                     className="relative z-10 border-8 border-white rounded-full w-56 mt-[-4rem]"
//                     src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

//                 <div 
//                     className="bg-emerald-600 h-auto w-full flex flex-col items-center py-12 px-8 text-2xl text-white"
//                 >
//                     <p className="text-3xl font-bold">Nome: {usuario.nome} </p>
//                     <p className="text-3xl font-bold">Email: {usuario.usuario}</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Perfil;



