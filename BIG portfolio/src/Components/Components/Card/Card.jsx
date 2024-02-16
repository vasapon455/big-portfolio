import "./Card.css";

export default function Card({ heading, date, text, image }) {
  return (
    <div className="card">
      <img src={image} className="card-image" alt="work" />
      <div className="card-right">
        <h4>{heading}</h4>
        <span>{date}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
