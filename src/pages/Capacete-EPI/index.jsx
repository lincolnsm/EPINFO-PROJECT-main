import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import capacete from '../../assets/capacete.png';
import { IoIosArrowRoundBack } from "react-icons/io";

function CapaceteInfo() {
  const [epiData, setEpiData] = useState({
    name: "",
    image: capacete,
    exchangeDate: "",
    quantity: 0
  });

  const navigate = useNavigate();

  const BackToHome = () => {
    navigate('/home');
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5173/"); // Flask API
      const data = await response.json();
      setEpiData(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="bg-gradient-to-b from-cyan-300 to-cyan-600 relative w-full h-full sm:h-auto sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center">
        <button
          onClick={BackToHome}
          className=" px-2 py-0 text-gray-700 font-semibold text-6xl rounded-lg transition-colors absolute top-0 left-0"
        >
          <IoIosArrowRoundBack />
        </button>
        <div className="flex justify-between items-start mb-6">
          {/* Lado esquerdo (Imagem e Nome) */}
          <div className="flex flex-col items-center mt-8 gap-4">
            {epiData.image ? (
              <img
                src={epiData.image}
                alt={epiData.name}
                className="w-20 h-20"
              />
            ) : (
              <div className="w-20 h-20 rounded-lg bg-gray-200"></div>
            )}
            <h2 className="text-lg font-bold mt-0 text-gray-700">Capacete</h2>
          </div>

          {/* Lado direito (Data de Troca e Quantidade) */}
          <div className="flex flex-col items-end absolute mt-8 right-4">
            <p className="text-base text-gray-700">
              <strong>Troca prevista em:</strong> {epiData.exchangeDate || "DD/MM/YYYY"}
            </p>
            <p className="text-base text-gray-700">
              <strong>Quantidade:</strong> {epiData.quantity || 0}
            </p>
          </div>
        </div>

        {/* Texto de EPI avariado */}
        <div className="bg-gray-100 p-3 rounded-lg mb-4 text-left">
          <h3 className="font-medium text-lg text-gray-700 mb-2">Como saber quando o EPI está avariado?</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
            <li><strong>Inspeção Visual:</strong> Verifique se há trincas, rachaduras ou deformações visíveis no capacete.</li>
            <li><strong>Fitas de Ajuste:</strong> Avalie se as fitas de ajuste estão desgastadas, frouxas ou quebradas.</li>
            <li><strong>Uso Prolongado:</strong> Substitua o capacete após impactos fortes, mesmo que não haja danos visíveis. Além disso, siga a recomendação do fabricante (normalmente a cada 5 anos).</li>
            <li><strong>Alterações de Cor:</strong> Mudanças na cor do capacete podem indicar exposição a produtos químicos ou raios UV, o que compromete a proteção.</li>
            <li><strong>Conforto:</strong> Se o capacete não se ajusta bem ou provoca desconforto, isso pode ser um sinal de que está danificado e precisa ser substituído.</li>
          </ul>
        </div>

          {/* Dicas de conservação */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4 text-left">
            <h3 className="font-medium text-lg text-gray-700 mb-3">Dicas para Manter o Capacete de EPI Conservado</h3>

            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li><strong>Inspeção Regular:</strong> Realize inspeções periódicas no capacete para verificar se há trincas, rachaduras ou qualquer outro dano visível. Isso ajuda a garantir que o capacete esteja sempre em boas condições de uso.</li>
              <li><strong>Armazenamento Adequado:</strong> Guarde o capacete em local seco, longe de fontes de calor ou umidade. Nunca deixe o capacete exposto diretamente ao sol, pois isso pode enfraquecer o material e diminuir a eficácia da proteção.</li>
              <li><strong>Limpeza Cuidadosa:</strong> Limpe o capacete regularmente com um pano macio e um pouco de sabão neutro. Evite o uso de produtos químicos agressivos que podem danificar o material do capacete.</li>
              <li><strong>Ajuste de Tamanho:</strong> Certifique-se de que o capacete esteja bem ajustado à sua cabeça. Ajuste as fitas de segurança e a parte interna para garantir que o capacete se encaixe corretamente e ofereça o máximo de proteção.</li>
              <li><strong>Evite Impactos Desnecessários:</strong> Mesmo que o capacete não apresente danos visíveis, evite deixá-lo cair ou sofrer impactos desnecessários. Um único impacto forte pode comprometer a integridade do capacete e afetar sua capacidade de proteção.</li>
              <li><strong>Substituição Periódica:</strong> Siga as recomendações do fabricante sobre o tempo de vida útil do capacete (geralmente 5 anos). Mesmo que o capacete pareça em bom estado, o desgaste do material pode afetar sua eficácia ao longo do tempo.</li>
            </ul>
          </div>
        </div>
      </div>
      );
}

      export default CapaceteInfo;
