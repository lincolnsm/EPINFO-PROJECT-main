import React, { useState } from "react";
/* import './style.css'; */
import logo from '../../assets/epinfoLogo.png';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [registro, setRegistro] = useState('');
  const [senha, setSenha] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();  // Hook de navegação

  // Definindo usuários para verificação
  const users = [
    {
      registro: '1',
      nome: 'Gilmar Santos',
      email: 'gilsan12@gmail.com',
      senha: '1',
    },
    {
      registro: 'EP24594',
      nome: 'Manuela Silva',
      email: 'manusilva32@gmail.com',
      senha: 'senha456',
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();  // Evita que a página seja recarregada

    // Verificar se o usuário existe e a senha está correta
    const usuario = users.find(
      (user) => user.registro === registro && user.senha === senha
    );

    if (usuario) {
      setPasswordError(false);
      // Se o login for bem-sucedido, redirecionar para a página Home
      navigate('/home');
    } else {
      setPasswordError(true);
      // Caso contrário, mostrar mensagem de erro
      setErro('Registro ou senha incorretos');
    }
  }; 

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="bg-gradient-to-b from-cyan-300 to-cyan-600 w-full h-screen sm:h-auto sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center">
        <img
          src={logo}
          alt="Logo EPINFO"
          className="mx-auto mb-6 sm:w-32 sm:h-32 md:w-80 md:h-80 hover:scale-110 transition-transform duration-200"
        />
        <h1 className="text-white text-2xl font-bold mb-4">Bem-vindo(a)</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="registro" className="block text-white text-lg font-medium mb-2">Registro</label>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-inner">
              <i className="fas fa-user text-gray-500 mr-2"></i>
              <input
                type="text"
                id="registro"
                placeholder="Registro"
                className="w-full outline-none border-none text-gray-700"
                value={registro}
                onChange={(e) => setRegistro(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="senha" className="block text-white text-lg font-medium mb-2">Senha</label>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-inner">
              <i className="fas fa-lock text-gray-500 mr-2"></i>
              <input
                type="password"
                id="senha"
                placeholder="Senha"
                className="w-full outline-none border-none text-gray-700"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            {passwordError && (
              <p className="bg-red-100 text-red-500 border-2 border-red-500 rounded-lg p-0.1 mt-2">Senha incorreta. Tente novamente.</p>
            )} 
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold transition-colors"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}


export default Login;

