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

        var relatedForums = [
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            },
            {
                "topic": "Another Topic",
                "preview": "Lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff lorem ipsum stuff",
                "upvotes": 2,
                "comments": 4
            }
        ];

        return (
            <div className="forum">
                <Nav />
                <div className="page-content projects-list">
                    <table className="main-page">
                        <tr>
                            <div className="forum-content">
                                <table>
                                    <tr>
                                        <td>
                                            <div className="post-avatar">
                                                <img src={[process.env.PUBLIC_URL, "images/thumbnails/placeholder.png"].join("/")} alt="" />
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
                            </div>
                            <div className="sidebar">
                                <div className="category">
                                    <p className="title">b/CreepyStuff</p>
                                    <p>Creepy pasta, creepy pizza, creepy smorgasbord.</p>
                                </div>
                                {relatedForums.map(forum => {
                                    return(
                                        <div className="other-topic">
                                            <p className="title">{forum.topic}</p>
                                            <p>{forum.preview}</p>
                                            <p className="reactions">{forum.upvotes} upvotes · {forum.comments} comments</p>
                                        </div> 
                                    )
                                })}
                            </div>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Projects;
