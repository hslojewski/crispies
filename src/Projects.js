import FilteredProjects from './FilteredProjects';
import Nav from './Nav';
import './Forum.scss';


const React = require('react');

class Projects extends React.Component {
    componentDidMount() {
        document.querySelector('body').scrollTo({
            top: 0,
            left: 0
        });
    }

    render() {
        const {
            displayProjects, clearActiveTags, toggleAccordion, orderChronologically, projectData, getProjectData,
            activeTags = [], tools = [], skills = [], affiliations = [], roles = [], projects = {}, filterType = "AND", tagAccordions = {}
        } = this.props;

        return (
            <div className="forum">
                <Nav />
                <div className="page-content projects-list">
                    <h1>Projects</h1>
                    <h2>List</h2>
                    <FilteredProjects projects={projects} activeTags={activeTags} filterType={filterType} displayProjects={displayProjects} orderChronologically={orderChronologically} projectData={projectData} getProjectData={getProjectData} />
                </div>
            </div>
        );
    }
}

export default Projects;
