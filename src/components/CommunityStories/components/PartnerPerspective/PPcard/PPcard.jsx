import "./PPcard.css";

function PPcard(props) {
  return (
    <div
      className="ppCard_main"
      style={{
        "--PPbgcolor": props.backgroundcolor,
        "--brcolor": props.bordercolor,
      }}
    >
      <p className="Main_content">{props.Mcontent}</p>
      <div className="card_container">
        <span className="highlight_span">Highlight</span>
        <span className="Highlight">{props.Hcontent}</span>
      </div>
      <div
        className="PcardLine"
        style={{
          "--linebg": props.linecolor,
          "--marginT": props.linemargin,
        }}
      ></div>
      {/* footer */}
      <div className="C_footer">
        <img
          src={props.sorce}
          alt="pic"
          className="PPcard_pic"
          style={{
            "--pcheight": props.Pcard_height,
            "--pcwidth": props.Pcard_width,
            "--marginT": props.margin_top,
          }}
        />
        <div className="Footer_Text_con">
          <span className="f_spann">{props.PPF_contents}</span>
          <span>{props.PPF_contents_2nd}</span>
        </div>
      </div>
    </div>
  );
}

export default PPcard;
