import { Briefcase, Database, Server } from "lucide-react"

const AboutSection = ()=> {
    return (
        <section
        id="about"
        className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About Me<span className="text-primary"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Backend Engineer & Problem Solver
                        </h3>

                        <p 
                        className="text-muted-foreground">
                            I'm a backemd engineer passionate about building scalable,
                            secure, and high-performing systems. My expertise lies in designing 
                            RESTful APIs, working with relational and nin-realtional databases,
                            and optimizing backend architectures to support modern technologies.    
                        </p>

                        <p className="text-muted-foreground">
                            I enjoy solving complex problems with clean and efficient solutions, 
                            and I’m constantly learning new tools and technologies to stay ahead 
                            in the ever-evolving software engineering landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 gap-6">
                        <div className=" gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Server className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold-text-lg">API Development</h4>  
                                    <p className="text-muted-foreground">
                                        Designing and maintaining scalable RESTful APIs 
                                        for web and mobile applications.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className=" gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold-text-lg">UI/UX Designer</h4>  
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user 
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className=" gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold-text-lg">Project Management</h4>  
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to ccompletion ith agile
                                        methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection