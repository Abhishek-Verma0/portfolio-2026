"use client"
import "./Skill.css"

import SpotlightCard from '../SpotlightCard';


let sk=["C","C++","Python","Javascript","Node","React Js","Next Js"]
const Skill = () => {
  return (
    <section className="pag" id="skill">

        <div className="sk-title">Technologies & Languages</div>
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
