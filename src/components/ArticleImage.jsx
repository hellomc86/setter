const ImagePre = ({ image }) => {
  return (
    <div className="ImagePre">
      <img src={image} alt={`Image `} height={450} />
    </div>
  );
};

export default ImagePre;
