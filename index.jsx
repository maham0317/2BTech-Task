import { ServiceCard } from "../ServiceCard";

const TiltCard = () => {
  const serviceList = [
    {
      title: "Video Reel Creation",
      desc: "A powerful, cinematic showcase of your brand’s best moments.",
      image: "https://images.pexels.com/photos/6954163/pexels-photo-6954163.jpeg",
      points: [
        "Professionally edited highlights",
        "Engaging, fast-paced storytelling",
        "High-quality color grading & effects",
        "Seamless transitions & sound design",
        "Perfect for pitching & branding",
      ],
    },
    {
      title: "Product Demo Videos",
      desc: "Showcase product features and usability through engaging visual stories.",
      image: "https://images.pexels.com/photos/3198017/pexels-photo-3198017.jpeg",
      points: [
        "Clear feature breakdowns",
        "Visual walkthroughs",
        "Voiceover & screen text",
        "HD product closeups",
        "Perfect for websites & ads",
      ],
    },
    {
      title: "Event Highlights",
      desc: "Capture the essence of your special moments and events in cinematic fashion.",
      image: "https://images.pexels.com/photos/2754968/pexels-photo-2754968.jpeg",
      points: [
        "On-location filming",
        "Drone & multi-camera setup",
        "Emotional storytelling",
        "Licensed music & effects",
        "Ideal for sharing & promotion",
      ],
    },
  ];

  return (
    <section className="relative bg-[#0d0d0d] text-white py-20">
      {/* Sticky heading - only visible inside this section */}
      <div className="sticky top-20 z-10 pointer-events-none select-none text-center">
        <h1 className="text-6xl md:text-[180px] font-bold text-gray-300 opacity-10 whitespace-nowrap">
          Services
        </h1>
      </div>

      {/* Content cards */}
      <div className="relative z-20 flex flex-col gap-24 items-center justify-center mt-20 px-6">
        {serviceList.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default TiltCard;
