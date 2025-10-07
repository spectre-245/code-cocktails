import "./Metrics.css";

function Metrics({
  heading,
  content,
  rates,
  source,
  right,
  top,
  backgroundcolor,
  height,
  padright,
  color,
  length,
}) {
  return (
    <div
      className="metrics_div"
      style={{
        "--bgcolor": backgroundcolor,
        "--padright": padright,
        "--color": color,
        "--height": length,
      }}
    >
      <h2>{heading}</h2>
      <p className="metrics_content">{content}</p>
      <span>{rates}</span>
      <img
        src={source}
        alt="pic"
        style={{
          "--top": top,
          "--right": right,
          "--size": height,
        }}
      />
    </div>
  );
}

export default Metrics;
