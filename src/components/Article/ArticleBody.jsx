
import Image from "../CommonComponents/Image";
import Paragraph from "./Paragraph";

const ArticleBody = ({ anArticle }) => {


  return (
    <div className="ArticleBody">

      {anArticle.aticleBody && anArticle.aticleBody.map((paragraph, index) => (
        <Paragraph key = {index} paragraph = {paragraph} />
      ))}

    </div>
  );
};

export default ArticleBody;
