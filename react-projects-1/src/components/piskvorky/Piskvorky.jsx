import "/Piskvorky.css";

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

export const Piskvorky = () => {
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Ctverec />
        <Ctverec />
        <Ctverec />
      </div>
      <div className="row">
        <Ctverec />
        <Ctverec />
        <Ctverec />
      </div>
      <div className="row">
        <Ctverec />
        <Ctverec />
        <Ctverec />
      </div>
    </div>
  );
};
