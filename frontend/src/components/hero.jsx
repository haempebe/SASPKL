function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      </div>
    </div>
  );
}

export default Hero;
