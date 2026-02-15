"use client";
import React from "react";
import TrueFocus from "../true-focus/TrueFocus";
import { Button } from "@/components/ui/moving-border";

const Skill = () => {
  const skills = {
    Languages: ["C++", "C", "Python", "JavaScript"],
    Frameworks: ["ReactJs", "NodeJs", "Express", "TensorFlow", "PyTorch"],
    Tools: ["NumPy", "Pandas"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-4 sm:p-8 lg:p-12">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(82, 39, 255, 0.3), inset 0 0 20px rgba(82, 39, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(82, 39, 255, 0.5), inset 0 0 30px rgba(82, 39, 255, 0.15);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .skill-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          background: rgba(30, 41, 59, 0.6);
          border-color: rgba(148, 163, 184, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(82, 39, 255, 0.2);
        }

        .skill-badge {
          background: rgba(82, 39, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(82, 39, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .skill-badge:hover {
          background: rgba(82, 39, 255, 0.25);
          border-color: rgba(82, 39, 255, 0.6);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 16px rgba(82, 39, 255, 0.3);
        }
      `}</style>

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
              className="skill-card p-6 sm:p-8 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                {category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-badge px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-purple-200 cursor-pointer transform transition-all duration-300"
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

        {/* Decorative gradient background elements */}
        <div
          className="fixed top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float"
          style={{ animation: "float 6s ease-in-out infinite" }}    
        ></div>
        <div
          className="fixed bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float"
          style={{ animation: "float 8s ease-in-out infinite 1s" }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
