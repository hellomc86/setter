import GridItem from "./gridItem";
import "./Gallery.css";
const Gallery = ({ images }) => {
  
  return (
    <div className="Gallery">
    {images.map((image, index) => (
      <GridItem key={index} image = {image} index = {index} />
  ))}
  </div>
  )
};


export default Gallery;
