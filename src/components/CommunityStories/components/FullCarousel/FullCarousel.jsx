import "./FullCarousel.css";

function FullCarousel(props) {
  return (
    <div
      className="F_caro_body"
      style={{
        "--F_caro_bg": props.backgroundColor,
        "--F_caro_bgimage": `url(${props.fcarou_bgImage})`,
        "--F_caro_top": props.bgTop || "0",
        "--F_caro_right": props.bgRight || "0",
      }}
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
            "--line_space": props.linespace,
          }}
        ></div>
      </div>
      {/* foot section */}
      <footer className="fcal_footer">
        <img
          style={{
            "--ffoot_height": props.foot_img_height,
          }}
          src={props.FCal_src}
          loading="lazy"
          alt="pic"
          className="footcal_img"
        />
        <div className="name_part">
          <span className="ffoot_name">{props.fFoot_name}</span>
          {/* position */}
          <span>{props.fFoot_position}</span>
        </div>
      </footer>
    </div>
  );
}

export default FullCarousel;
