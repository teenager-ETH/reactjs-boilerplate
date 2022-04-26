const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className={`text-5xl font-bold gradient`}>Welcome</h1>
          <p className="py-6">
            This is a boilerplate for React Apps, customize it to the reality of your project following the basic structuture and
            the guidelines defined at GUIDELINES.md
          </p>
          <button className="btn btn-neutral">Go!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
