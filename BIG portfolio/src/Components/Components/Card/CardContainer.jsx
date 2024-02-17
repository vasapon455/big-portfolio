export default function CardContainer({ header, children }) {
  return (
    <>
      <div className="card-container-header">
        <img src="assets/section-line.svg" alt="line" width="320px"></img>
        <h2>{header}</h2>
        <img
          style={{ transform: "rotate(180deg)" }}
          width="320px"
          src="assets/section-line.svg"
          alt="line"
        ></img>
      </div>
      <div className="card-container">{children}</div>
    </>
  );
}
