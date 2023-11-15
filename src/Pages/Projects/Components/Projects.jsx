import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServiceItems(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Projects;