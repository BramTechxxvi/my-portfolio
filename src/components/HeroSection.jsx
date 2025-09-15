import React from 'react'
import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text Section */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className='opacity-0 animate-fade-in'>Hi👋, I'm </span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'>
                            {" "}
                            Ibrahim
                        </span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>
                            {" "}
                            Ibrahim Babatunde
                        </span>
                    </h1>
                    <div className="text-lg md:text-2xl font-semibold text-primary opacity-0 animate-fade-in-delay-3">
                        Backend/Software Engineer
                    </div>
                    <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse architecto possimus voluptatem 
                        maxime quis quaerat exercitationem dolores ab iure! Magni sit necessitatibus dolores dolore 
                        corporis enim quo quia eligendi rerum.
                    </p>
                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href="#projects" className='cosmic-button'>
                            View My Work
                        </a>
                    </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex justify-center md:justify-end items-center">
                    <img 
                        src="/usage.JPG" 
                        alt="Ibrahim" 
                        className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-full shadow-lg opacity-0 animate-fade-in-delay-2" 
                    />
                </div>
            </div>
            <div 
                className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
  )
}

export default HeroSection