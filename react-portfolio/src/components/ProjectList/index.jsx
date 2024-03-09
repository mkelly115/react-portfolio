import { projects } from "../../utils/data";
import Project from "../Project";

const ProjectList = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 mb-4">Development Projects</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                {projects.map((project) => (
                    <div key={project.id} className="col mb-4">
                        <Project
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            href={project.href}
                            liveLink={project.liveLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList