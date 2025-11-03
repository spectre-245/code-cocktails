import { useState } from "react";
import "./Dropdown.css";
import Button from "../../Button/Button";

function Dropdown({ title, description, color = "black", con }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className="dropdown_card"
      style={{
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
      onClick={toggleDropdown}
    >
      <div className="dropdown_header">
        <Button
          btn_content={con}
          backgroundColor="#ffe4a9"
          shadowColor="red"
          color="white"
          width="10px"
        />
        <h4>{title}</h4>
        <span className={`arrow ${isOpen ? "open" : ""}`}>∧</span>
      </div>
      {isOpen && (
        <>
          <p className="dropdown_description">{description}</p>
          <hr className="dropdown_divider" />
        </>
      )}
    </div>
  );
}

export default Dropdown;
