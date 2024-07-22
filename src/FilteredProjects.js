import { Link } from "react-router-dom";
import Content from './Content';

const React = require('react');

class FilteredProjects extends React.Component {
  render() {
    const {
      orderChronologically, projectData, getProjectData, page = 1,
      projects = {}, activeTags = [], filterType = "AND", numToDisplay =  null
    } = this.props;

    var activeTagProjectsList = [];
    var activeTagProjectsSet = new Set();
    var projectsToDisplay = [];
    var ignoredProjectsSet = new Set();
    var ignoredProjectsList = [];
    var projectsToIgnore = [];

    if (activeTags.length) {
      activeTags.forEach(tag => {
        Object.keys(projects).forEach(projectPath => {
          var tools = projects[projectPath].tools || [],
              skills = projects[projectPath].skills || [],
              affiliations = projects[projectPath].affiliations || [],
              roles = projects[projectPath].roles || [],
              tags = tools.concat(skills).concat(affiliations).concat(roles);
          if (tags.includes(tag)) {
            activeTagProjectsSet.add(projectPath);
            activeTagProjectsList = Array.from(activeTagProjectsSet);
            projectsToDisplay = activeTagProjectsList;
          } else {
            ignoredProjectsSet.add(projectPath);
            ignoredProjectsList = Array.from(ignoredProjectsSet);
            projectsToIgnore = ignoredProjectsList;
          }
        });
      });
    } else {
      projectsToDisplay = Object.keys(projects);
    }
    if (filterType === "AND") {
      // debugger;
      projectsToDisplay = projectsToDisplay.filter(project => {
        if (!projectsToIgnore.includes(project)) {
          return project;
        }
      });
    }
    var orderedProjects = orderChronologically(projects);
    projectsToDisplay = orderedProjects.filter(a => projectsToDisplay.includes(a));
    
    if (numToDisplay && projectsToDisplay.length) {
      projectsToDisplay = projectsToDisplay.slice(0, numToDisplay);
    }
    // console.log(numToDisplay);
    // console.log(projectsToDisplay);
    // debugger;
    return (
        <div>
          <div className="project-detail">
            {projectsToDisplay.slice(((page-1)*15),((page)*15)).map((projectPath, i) => {
              return(
                  <Content
                    projectPath={projectPath}
                    thumbnail={projects[projectPath].thumbnail}
                    data={projectData}
                    getProjectData={getProjectData}
                    title={projects[projectPath].title}
                    postContent={projects[projectPath].postContent}
                    isReply={projects[projectPath].isReply}
                    images={projects[projectPath].images}
                    tags={{
                      tools: projects[projectPath].tools,
                      skills: projects[projectPath].skills,
                      affiliations: projects[projectPath].affiliations,
                      roles: projects[projectPath].roles
                    }}
                    date={projects[projectPath].date}
                    type="project"
                    orderChronologically={orderChronologically}
                />
              )
            })}
          </div>
          <table className="page-counter">
            <tr>
                <td><a href="#/projects">1</a></td>
                <td><a href="#/projects/2">2</a></td>
                <td><a href="#/projects/2">3</a></td>
                <td><a href="#/projects/2">4</a></td>
                <td><a href="#/projects/2">5</a></td>
                <td><a href="#/projects/2">6</a></td>
                <td><a href="#/projects/2">7</a></td>
                <td><a href="#/projects/2">8</a></td>
                <td><a href="#/projects/2">9</a></td>
                <td><a href="#/projects/2">10</a></td>
            </tr>
          </table>
        </div>
    )
  }
}

export default FilteredProjects;
