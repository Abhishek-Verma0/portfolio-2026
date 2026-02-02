"use client"
import "./Skill.css"
import Threads from "../Threads"
import SpotlightCard from '../SpotlightCard';


let sk=["C","C++","Python","Javascript","Node","React Js","Next Js"]
const Skill = () => {
  return (
    <section className="pag">

        <div className="sk-title">Framework & Languages</div>
      <div className="skill-card">
        {sk.map((element, index) => (
          <SpotlightCard
            key={index}
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            {element}
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

export default Skill
