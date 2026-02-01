import Image from "next/image";


import Squares from '../components/Squares';
import Navbar from '../components/navbar/Navbar'
import TextType from '../components/TextType';
export default function Home() {
  return (
    <div className="about">

      <div className="content">
        <Navbar />
        <div className="intro-text">
          <TextType
            text={["Hi..!", "I'm Abhishek", " a passionate developer."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            texts={[
              "Welcome !",
              "Build some amazing experiences!",
            ]}
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </div>
      </div>
    </div>
    


  );
}
