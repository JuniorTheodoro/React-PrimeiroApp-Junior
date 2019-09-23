import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Componente: functional component
function App() {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  // palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(301);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(301);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <p>
          Pense em um número de 0 à 300 e deixe a máquina descobrir o que foi
          pensado.
        </p>
        <button className="buttonBlue" onClick={iniciarJogo}>
          Começar a jogar.
        </button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="App">
        <p>
          Acertei o número {palpite} com {numPalpites} chutes.
        </p>
        <button className="buttonBlue" onClick={iniciarJogo}>
          Iniciar novamente!
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button className="buttonBlue" onClick={menor}>
        Menor!
      </button>
      <button
        className="buttonBlue"
        style={{ marginLeft: "8px", marginRight: "8px" }}
        onClick={acertou}
      >
        Acertou!
      </button>
      <button className="buttonBlue" onClick={maior}>
        Maior!
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
