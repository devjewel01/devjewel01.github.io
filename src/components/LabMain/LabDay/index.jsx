import Navbar from "../../Navbar";
import python from "../../../constants/python";
import { useParams } from "react-router-dom";
import Code from "../../blog/Code";
import Text from "../../blog/Text";
import Image from "../../blog/Image";
import Heading from "../../blog/Heading";
import CodeOutput from "../../blog/CodeOutput";
import ParaText from "../../blog/ParaText";
import CorrectText from "../../blog/CorrectText";
import WrongText from "../../blog/WrongText";
import List from "../../blog/List";
import java from "../../../constants/java";

const Index = () => {
  const { courseId, dayId } = useParams();
  let courseName = courseId;
  if(courseName === 'python'){
    courseName = python;
  } else if(courseName === 'java'){
    courseName = java
  }
  const day = courseName.find((item) => item.id === dayId);
  const content = day.content;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-24">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white text-center md:text-5xl lg:text-6xl">{day.title}</h1>
        <div className="max-w-3xl mx-auto px-5">
          {content && content.map((item, index) => (
            <div key={index}>
              {item.type === 'text' && <Text text={item.text} />}
              {item.type === 'image' && <Image src={item.src} alt={item.alt} height={item.height} width={item.width}/>}
              {item.type === 'code' && <Code language={item.language} text={item.text} />}
              {item.type === 'code-output' && <CodeOutput text={item.text} />}
              {item.type === 'heading' && <Heading text={item.text} />}
              {item.type === 'para-text' && <ParaText text={item.text} />}
              {item.type === 'correct-text' && <CorrectText text={item.text} />}
              {item.type === 'wrong-text' && <WrongText text={item.text} />}
              {item.type === 'list' && <List listItem={item.elements} />}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Index;