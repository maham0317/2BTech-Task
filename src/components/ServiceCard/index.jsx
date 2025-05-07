import { useEffect, useRef, useState } from "react";

export const ServiceCard = ({ service }) => {
    const mediaRef = useRef(null);
    const [rotate, setRotate] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!mediaRef.current) return;
  
        const rect = mediaRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        const startScroll = windowHeight;
        const endScroll = windowHeight / 2;
  
        const progress = (startScroll - rect.top) / (startScroll - endScroll);
        const clamped = Math.min(Math.max(progress, 0), 1);
        const angle = clamped * 15;
  
        setRotate(angle);
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className="mt-50 flex flex-col md:flex-row items-center justify-center z-10 w-full max-w-6xl">
        {/* Content Card */}
        <div className="md:w-120 bg-[#1a1a1a] p-8 shadow-lg z-10 border border-gray-400">
          <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
          <p className="text-gray-300 mb-4">{service.desc}</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 mb-6">
            {service.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-500 transition">
            Explore Now →
          </button>
        </div>
  
        {/* Media Card */}
        <div
          ref={mediaRef}
          className="md:w-120 h-[400px] border border-gray-400 overflow-hidden shadow-2xl transition-transform duration-300"
          style={{ transform: `rotate(${rotate}deg)` }}
        >
          {service.image.endsWith(".mp4") ? (
            <video
              src={service.image}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    );
  };