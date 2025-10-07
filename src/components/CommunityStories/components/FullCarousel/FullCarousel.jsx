import "./FullCarousel.css";

function FullCarousel(props) {
  return (
    <div
      className="F_caro_body"
      style={{ "--F_caro_bg": props.backgroundColor }}
    >
      <div className="f_caro_textdiv">
        <p className="fcaro_p">{props.F_caro_content}</p>
      </div>
      {/*Questions Sec  */}
      <div className="f_caro_qdiv">
        <span className="f_caro_qspan">Question</span>
        <p className="caro_q_p" style={{ "--f_caro_qwidth": props.maxwidth }}>
          {props.f_caro_question}
        </p>
      </div>
      <div className="fline_container">
        <div
          className="f_caro_line "
          style={{
            "--f_caroL_bg": props.linecolor,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FullCarousel;
