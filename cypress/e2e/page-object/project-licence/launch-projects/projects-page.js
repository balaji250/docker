// / <reference types="cypress" />

import LaunchProjectsPage from './launch-projects-page.js';

import SearchForInvalidProjectPage from './search-for-invalid-project-name.js';

class ProjectsPage
{
    launchProjects(projectName,taskTitleName,enterName)
{
 const clickLaunchProjects =  new LaunchProjectsPage();
 clickLaunchProjects.launchProjects(projectName,taskTitleName,enterName);
}
searchForInvalidProject(invalidProjectName,projectTitleName,enterName)
{
    const searchForInvalidProjectName =  new SearchForInvalidProjectPage();
    searchForInvalidProjectName.searchForInvalidProject(invalidProjectName, projectTitleName, enterName);
}

}
export default ProjectsPage;