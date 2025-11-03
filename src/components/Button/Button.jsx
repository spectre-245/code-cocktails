import "./Button.css";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.click}
        style={{
          "--bgColor": props.backgroundColor,
          "--shadowColor": props.shadowColor,
          "--width": props.width,
          color: props.color,
        }}
        className="ticket_btn"
      >
        {props.btn_content}
      </button>
    </div>
  );
}

export default Button;
