import "./Skill.css";

export default function Skill({ img, header, body }) {
  return (
    <div className="skill">
      <div className="skill-header-container">
        <img src={img} alt="icon" />
        <h2>{header}</h2>
      </div>
      <ul>
        {body.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </div>
  );
}
