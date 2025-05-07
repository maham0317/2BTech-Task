const HeroVideo = () => {
    return (
      <>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://cdn.prod.website-files.com/67b6b0f83e630122aa289fa0%2F67bc56c7dfdde847e2c7830f_Home%20Hero%20Video-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/67b6b0f83e630122aa289fa0%2F67bc56c7dfdde847e2c7830f_Home%20Hero%20Video-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/67b6b0f83e630122aa289fa0%2F67bc56c7dfdde847e2c7830f_Home%20Hero%20Video-transcode.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
      </>
    );
  };
  
  export default HeroVideo;
  