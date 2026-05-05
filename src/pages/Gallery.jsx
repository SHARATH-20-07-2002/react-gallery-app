import "./Gallery.css";

const stories = [
  {
    title: "Urban Deforestation in Bangalore",
    description: "Analyzing the loss of green cover due to rapid metropolitan expansion and its ecological consequences.",
    img: "https://picsum.photos/400?1"
  },
  {
    title: "Forest Fires and Pune's Air Quality",
    description: "Quantifying the correlation between seasonal wildfires and the spike in particulate matter concentrations.",
    img: "https://picsum.photos/400?2"
  },
  {
    title: "Waste Management in Varanasi",
    description: "Evaluating the efficiency of solid waste collection systems and their impact on the Ganges ecosystem.",
    img: "https://picsum.photos/400?3"
  },
  {
    title: "Predictive Ambulance Positioning",
    description: "Leveraging historical traffic data and incident heatmaps to optimize emergency response times.",
    img: "https://picsum.photos/400?4"
  },
  {
    title: "Urban Heat Islands",
    description: "Mapping temperature variations across concrete-dense districts to identify heat vulnerability zones.",
    img: "https://picsum.photos/400?5"
  },
  {
    title: "Restoration of Bengaluru Lakes",
    description: "A data-driven look at water quality improvement following community-led rejuvenation projects.",
    img: "https://picsum.photos/400?6"
  }
];

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {stories.map((story, index) => (
          <div
            className="card"
            key={index}
          >
            <div className="image-container">
              <img src={story.img} alt={story.title} />
              <div className="description-overlay">
                <p>{story.description}</p>
              </div>
            </div>
            <div className="title">{story.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;