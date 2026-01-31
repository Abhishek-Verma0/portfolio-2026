import Image from "next/image";


import Squares from '../components/Squares';
import Navbar from '../components/navbar/Navbar'
export default function Home() {
  return (

  <div className="about">
      
    <Squares 
    speed={0.5}
    squareSize={40}
    direction='diagonal' // up, down, left, right, diagonal
    borderColor='#fff'
    hoverFillColor='#222'
    direction="diagonal"
    borderColor="#271E37"
    hoverColor="#222222"
    size={40}
      />
      <div className="content">
          <Navbar/>
      </div>
    </div>

  );
}
