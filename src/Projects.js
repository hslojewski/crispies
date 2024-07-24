import FilteredProjects from './FilteredProjects';
import Nav from './Nav';
import './Forum.scss';


const React = require('react');

class Projects extends React.Component {
    // componentDidMount() {
    //     document.querySelector('body').scrollTo({
    //         top: 0,
    //         left: 0
    //     });
        // document.querySelector("body").scrollTo(0,0);
    // }

    render() {
        const {
            displayProjects, clearActiveTags, toggleAccordion, orderChronologically, projectData, getProjectData, page = 1,
            activeTags = [], tools = [], skills = [], affiliations = [], roles = [], projects = {}, filterType = "AND", tagAccordions = {}
        } = this.props;

        return (
            <div className="forum">
                <Nav />
                <div className="page-content projects-list">
                    <table>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td>
                                            <div className="post-avatar">
                                                <img src={[process.env.PUBLIC_URL, "projects/thumbnails/placeholder.png"].join("/")} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <p>
                                                <b className="post-user">username</b>
                                                <i className="post-date">8 years ago</i>
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                <h2>What's your paranormal experience that no one believes?</h2>
                                <p>Basically what the title says... Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                                <FilteredProjects projects={projects} page={page} activeTags={activeTags} filterType={filterType} displayProjects={displayProjects} orderChronologically={orderChronologically} projectData={projectData} getProjectData={getProjectData} />
                            </td>
                            <td className="sidebar">
                                sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar 
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Projects;
