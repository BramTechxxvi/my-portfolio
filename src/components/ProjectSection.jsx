import React from 'react'


const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of Project One.",
        imageUrl: "https://via.placeholder.com/300",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Project Two",
        description: "A brief description of Project One.",
        imageUrl: "https://via.placeholder.com/300",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Project Three",
        description: "A brief description of Project One.",
        imageUrl: "https://via.placeholder.com/300",
        githubUrl: "#"
    }
]
const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className=" container max-w-5xl mx-auto">
            <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of my recent projects. Each project was carefuly 
                crafted with attention to detail, performance, and user experience
            </p>

        </div>
    </section>
  )
}


export default ProjectSection
