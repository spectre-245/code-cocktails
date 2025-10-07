import "./Badge.css";

function Badge({ content, leftPad, rightPad, top, right }) {
  return (
    <div
      className="main_container"
      style={{
        "--top": top,
        "--right": right,
      }}
    >
      <div className="span_container">
        <span
          className="badge_span"
          style={{
            "--leftpad": leftPad,
            "--rightpad": rightPad,
          }}
        >
          {content}
        </span>
      </div>
    </div>
  );
}

export default Badge;
