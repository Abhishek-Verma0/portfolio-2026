"use client";
import React from "react";
import TrueFocus from "../true-focus/TrueFocus";
import "./Skill.css"

const Skill = () => {
  const skills = {
    Languages: ["C++", "C", "Python", "JavaScript"],
    Frameworks: ["ReactJs", "NodeJs", "Express", "TensorFlow", "PyTorch","Tailwind"],
    Tools: ["NumPy", "Pandas","Git","GitHub","Vercel","Clerk"],
  };

  return (
    <div id="skill" className="min-h-screen p-4 sm:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-block">
            <TrueFocus
              sentence="Tech Stack"
              manualMode={false}
              blurAmount={5}
              borderColor="#5227FF"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>

          <p
            className="text-slate-400 mt-3 text-sm sm:text-base animate-slide-in-left"
            style={{ animationDelay: "0.1s" }}
          >
            Explore the technologies and tools I use to build amazing products
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="skill-card p-6 sm:p-8 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                {category}
              </h3>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-badge px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium"
                    style={{
                      animationDelay: `${categoryIndex * 0.15 + index * 0.05}s`,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
