import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../service/Service"
import { ToastAlert } from "../utils/ToastAlerta"

interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): Promise<void> 
    handleLogout(): void
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

//Criar uma nova instância da API Context
export const AuthContext = createContext({} as AuthContextProps)

// Criar o Provedor
export function AuthProvider({children}: AuthProviderProps) {

const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
})

const [isLoading, setIsloading] = useState(false);

async function handleLogin(UsuarioLogin: UsuarioLogin){

    setIsloading(true);

    try{

        await login(`/usuarios/logar`, UsuarioLogin, setUsuario);
        ToastAlert("Usuário autenticado com sucesso!", "sucesso");

    }catch(error){

        ToastAlert("Os dados do usuário estão inconsistentes!", "erro");
    }
    setIsloading(false);
}

function handleLogout(){
    setUsuario({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",   
    })
}

    // Renderizando a Context na aplicação React
    return (
        <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthContext