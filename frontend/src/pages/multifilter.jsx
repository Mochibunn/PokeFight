import PropTypes from 'prop-types';

const Sidebar = ({ onFilterByType } ) => {
  return (
    <div>
      <h2>Filter by Type</h2>
      <button style={buttonStyle} onClick={() => onFilterByType("Normal")}>Normal</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Fire")}>Fire</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Water")}>Water</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Grass")}>Grass</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Electric")}>Electric</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Ice")}>Ice</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Fighting")}>Fighting</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Poison")}>Poison</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Ground")}>Ground</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Flying")}>Flying</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Psychic")}>Psychic</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Bug")}>Bug</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Rock")}>Rock</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Ghost")}>Ghost</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Dragon")}>Dragon</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Dark")}>Dark</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Steel")}>Steel</button>
      <button style={buttonStyle} onClick={() => onFilterByType("Fairy")}>Fairy</button>
    </div>
  );
};


const buttonStyle = {
    margin: "5px",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#3498db",
    color: "#fff",
  };


  Sidebar.propTypes = {
    onFilterByType: PropTypes.func.isRequired,
  };
  

export default Sidebar;
