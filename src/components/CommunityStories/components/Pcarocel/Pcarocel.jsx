import "./Pcarocel.css";

function Pcarocel({ source, Name, Title, pcontents, classs, backgroundcolor }) {
  return (
    <div className={classs}>
      <div className="pcl_sub">
        <img
          src={source}
          alt="pic"
          loading="lazy"
          style={{ "--bgcolorr": backgroundcolor }}
        />
        <h4>{Name}</h4>
        <span>{Title}</span>
        <p>{pcontents}</p>
      </div>
    </div>
  );
}

export default Pcarocel;
