import { projects } from "../../utils/data";
import Project from "../Project";

const ProjectList = () => {

    return(
        <div>
            {
                projects.map((project) => (
                    <Project key={project.id} title={project.title} description={project.description} image={project.image} technologies={project.technologies}/>
                ))
            }
        </div>
    )
}

export default ProjectList