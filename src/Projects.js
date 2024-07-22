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
            displayProjects, clearActiveTags, toggleAccordion, orderChronologically, projectData, getProjectData, page = 1,
            activeTags = [], tools = [], skills = [], affiliations = [], roles = [], projects = {}, filterType = "AND", tagAccordions = {}
        } = this.props;

        return (
            <div className="forum">
                <Nav />
                <div className="page-content projects-list">
                    <h2>What's a scary experience you've had but no one believes you?</h2>
                    <FilteredProjects projects={projects} page={page} activeTags={activeTags} filterType={filterType} displayProjects={displayProjects} orderChronologically={orderChronologically} projectData={projectData} getProjectData={getProjectData} />
                </div>
            </div>
        );
    }
}

export default Projects;
