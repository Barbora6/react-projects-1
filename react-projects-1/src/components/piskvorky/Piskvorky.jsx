import { useEffect, useState } from "react";
import "./Piskvorky.css";

// indexy políček v mřížce budou rozloženy
// 1,2,3
// 4,5,6
// 7,8,9

// Toto je jedno políčko v mřížce. Zobrazuje buď X, O, nebo nic, a reaguje na kliknutí.
const Ctverec = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

// ctverec - pole s 9 prvky reprezentující mřížku (každý prvek je buď "", "X", nebo "O")
// kdoTahne -  boolean, kdo je na tahu (true = "X", false = "O")

export const Piskvorky = () => {
  const [ctverce, setCtverce] = useState(Array(9).fill(""));
  const [kdoTahne, setKdoTahne] = useState(true);
  const [status, setStatus] = useState("");

  const zjistiViteze = (ctverce) => {
    const vitezneVzory = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < zjistiViteze.length; i++) {
      const [x, y, z] = vitezneVzory[i];

      if (
        ctverce[x] &&
        ctverce[x] === ctverce[y] &&
        ctverce[x] === ctverce[z]
      ) {
        return ctverce[x];
      }
    }
    return null;
  };

  const handleClick = (aktualniCtverec) => {
    let vybraneCtverce = [...ctverce];
    if (zjistiViteze(vybraneCtverce) || vybraneCtverce[aktualniCtverec]) return;
    vybraneCtverce[aktualniCtverec] = kdoTahne ? "X" : "O";
    setKdoTahne(!kdoTahne);
    setCtverce(vybraneCtverce);
  };

  const handleRestart = () => {
    setKdoTahne(true);
    setCtverce(Array(9).fill(""));
  };

  useEffect(() => {
    if (!zjistiViteze(ctverce) && ctverce.every((item) => item !== "")) {
      setStatus(`Hra je nerozhodně. Prosím resetujte hru!`);
    } else if (zjistiViteze(ctverce)) {
      setStatus(`Vítězem je ${zjistiViteze(ctverce)}. Prosím restartujte hru.`);
    } else {
      setStatus(`Další hráč je ${kdoTahne ? "X" : "O"}`);
    }
  }, [ctverce, kdoTahne]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Ctverec value={ctverce[0]} onClick={() => handleClick(0)} />
        <Ctverec value={ctverce[1]} onClick={() => handleClick(1)} />
        <Ctverec value={ctverce[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Ctverec value={ctverce[3]} onClick={() => handleClick(3)} />
        <Ctverec value={ctverce[4]} onClick={() => handleClick(4)} />
        <Ctverec value={ctverce[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Ctverec value={ctverce[6]} onClick={() => handleClick(6)} />
        <Ctverec value={ctverce[7]} onClick={() => handleClick(7)} />
        <Ctverec value={ctverce[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart hry</button>
    </div>
  );
};
