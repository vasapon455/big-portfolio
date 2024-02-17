import { useState, useMemo } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      },
    }),
    []
  );
  return [hovered, eventHandlers];
};

export default function GridItem({ image, text }) {
  const [hovered, eventHandlers] = useHover();

  return (
    <div className="grid-item" {...eventHandlers}>
      <img src={image} alt="work" />
      {hovered ? <div className={"overlay-text"}>{text}</div> : null}
    </div>
  );
}
