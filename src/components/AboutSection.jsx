const AboutSection = ()=> {
    return (
        <section
        id="about"
        className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3>Passionate Web Beveloper & Tech Creator</h3>
                    </div>

                    <p className="text-muted-foreground">
                        With over 5 years of experience in web developent, 
                        I specialize in creating responsive, accessible, and 
                        performant web applicatons using modern technologies.
                    </p>

                    <p className="text-muted-foreground">
                        I'm pessionate about creating elegant solutions to complex
                        problems, and I'm constantly learning new technlogies 
                        and  techniques to stay at the forefront of the ever-existng 
                        web landscape
                    </p>

                </div>
            </div>
        </section>
    )
}

export default AboutSection