import GridItem from "./gridItem";

import "./Gallery.css";
import "./../../App.css"

const Gallery = ({ items }) => {
  
  return (
    <div className="Gallery">
    {items.map((item, index) => (
      item && <GridItem key={index} item = {item} index = {index} />
  ))}
  </div>
  )
};


export default Gallery;
