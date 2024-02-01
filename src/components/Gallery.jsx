import GridItem from "./gridItem";

const Gallery = ({ images }) => {
  
  return (
    <div className="Gallery">
    {images.map((image, index) => (
      <GridItem key={index} image = {image} imageTitle={`Image N ${index}`}  />
  ))}
  </div>
  )
};


export default Gallery;
