import GridItem from "./gridItem";

const Gallery = ({ images }) => {
  
  return (
    <div className="Gallery">
    {images.map((image, index) => (
      <GridItem key={index} image = {image} />
  ))}
  </div>
  )
};


export default Gallery;
