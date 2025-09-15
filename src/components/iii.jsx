<div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
  {/* Image */}
  <div className="flex justify-center md:justify-start">
    <img 
      src="/your-image.jpg" 
      alt="Ibrahim Ibrahim" 
      className="w-64 h-64 rounded-2xl object-cover shadow-lg opacity-0 animate-fade-in" 
    />
  </div>

  {/* Text */}
  <div className="space-y-6 text-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      <span className='opacity-0 animate-fade-in'>Hi👋, I'm </span>
      <span className='text-primary opacity-0 animate-fade-in-delay-1'>
        {" "} Ibrahim
      </span>
      <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>
        {" "} Ibrahim
      </span>
    </h1>

    <p className='text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit...
    </p>

    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
      <a href="#projects" className='cosmic-button'>
        View My Work
      </a>
    </div>
  </div>
</div>
