import { useState } from "react";
import "./Gallery.css";

const stories = [
  {
    title: "Urban Deforestation in Bangalore",
    description: "Impact of urban expansion on forests",
    img: "https://picsum.photos/400?1"
  },
  {
    title: "Forest Fires leading to Pollution in Pune",
    description: "Air quality issues due to forest fires",
    img: "https://picsum.photos/400?2"
  },
  {
    title: "Solid Waste Management in Varanasi",
    description: "Challenges in waste disposal systems",
    img: "https://picsum.photos/400?3"
  },
  {
    title: "Predictive Ambulance Positioning",
    description: "Using data to improve emergency response",
    img: "https://picsum.photos/400?4"
  },
  {
    title: "Urban Heat Islands",
    description: "Rising temperatures in urban areas",
    img: "https://picsum.photos/400?5"
  },
  {
    title: "Bengaluru Lakes",
    description: "Restoration and conservation efforts",
    img: "https://picsum.photos/400?6"
  },
  {
    title: "Ambulance Data Stories",
    description: "Insights from emergency service data",
    img: "https://picsum.photos/400?7"
  }
];

function Gallery() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: ""
  });

  return (
    <div className="gallery">
      {stories.map((story, index) => (
        <div
          className="card"
          key={index}
          onMouseMove={(e) =>
            setTooltip({
              visible: true,
              x: e.clientX,
              y: e.clientY,
              text: story.description
            })
          }
          onMouseLeave={() =>
            setTooltip((prev) => ({ ...prev, visible: false }))
          }
        >
          <img src={story.img} alt={story.title} />

          <div className="title">{story.title}</div>
        </div>
      ))}


      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            top: tooltip.y + 15,
            left: tooltip.x + 15
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

export default Gallery;