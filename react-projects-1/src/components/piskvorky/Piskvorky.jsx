import { useState } from "react";
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

  const handleClick = (aktualniCtverec) => {
    let vybraneCtverce = [...ctverce];
    vybraneCtverce[aktualniCtverec] = kdoTahne ? "X" : "O";
    setKdoTahne(!kdoTahne);
    setCtverce(vybraneCtverce);
  };

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Ctverec onClick={() => handleClick(0)} />
        <Ctverec onClick={() => handleClick(1)} />
        <Ctverec onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Ctverec onClick={() => handleClick(3)} />
        <Ctverec onClick={() => handleClick(4)} />
        <Ctverec onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Ctverec onClick={() => handleClick(6)} />
        <Ctverec onClick={() => handleClick(7)} />
        <Ctverec onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};
