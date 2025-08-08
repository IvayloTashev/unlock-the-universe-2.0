import React from "react";
import "./loadSpinner.css"; // import the CSS below

const planets = [
  { orbitClass: "orbit1", sizeClass: "w-2 h-2", colorClass: "bg-gray-400", spinClass: "spin-1", delayClass: "delay-1"}, // Mercury
  { orbitClass: "orbit2", sizeClass: "w-3 h-3", colorClass: "bg-orange-400", spinClass: "spin-2", delayClass: "delay-2"}, // Venus
  { orbitClass: "orbit3", sizeClass: "w-3 h-3", colorClass: "bg-blue-400", spinClass: "spin-3", delayClass: "delay-3"}, // Earth
  { orbitClass: "orbit4", sizeClass: "w-2 h-2", colorClass: "bg-red-500", spinClass: "spin-4", delayClass: "delay-4"}, // Mars
  { orbitClass: "orbit5", sizeClass: "w-4 h-4", colorClass: "bg-yellow-300", spinClass: "spin-5", delayClass: "delay-5"}, // Jupiter
  { orbitClass: "orbit6", sizeClass: "w-3 h-3", colorClass: "bg-gray-300", spinClass: "spin-6", delayClass: "delay-6"}, // Saturn
  { orbitClass: "orbit7", sizeClass: "w-3 h-3", colorClass: "bg-cyan-300", spinClass: "spin-7", delayClass: "delay-7"}, // Uranus
  { orbitClass: "orbit8", sizeClass: "w-3 h-3", colorClass: "bg-blue-300", spinClass: "spin-8", delayClass: "delay-8"}, // Neptune
];

export default function SolarSystemLoader() {
  return (
    <section className="h-[80vh] w-full flex justify-center items-center">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="sun" />
        {planets.map((p, i) => (
          <div
            key={i}
            className={`orbit ${p.orbitClass} ${p.spinClass} ${p.delayClass}`}
          >
            <div className={`planet ${p.sizeClass} ${p.colorClass}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
