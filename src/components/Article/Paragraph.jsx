
import Image from "../CommonComponents/Image";

const Paragraph = ({ paragraph }) => {


  return (
    <div className="Paragraph">     

          <Image image={paragraph.imageOne} />
          <p className="ArticleBodyTitle">{paragraph.subTitle} </p>
          <p className="ArticleBodyText"> {paragraph.content}</p>     
    </div>
  );
};

export default Paragraph;
