import MySubmittedTasksPage from './my-submitted-tasks-page.js';

class LaunchProjectsPage {
    launchProjects(projectName, projectTitleName, enterName) {
    // Click on the Projects menu
    const projectsMenu = cy.get('.active > .mat-icon');
    projectsMenu.click();

    //click search Box
    const searchBox = cy.get('#search');
    searchBox.click();

    //Type the Projects name
    searchBox.type(projectName);

    //click search icon
    const searchIcon = cy.get('.input-suffix');
    searchIcon.click();

    //click launch button on searched project
    const launchButton = cy.get('#task_0');
    launchButton.click();

    //Enter task title 
    const taskTitle = cy.get('#taskTitle');
    taskTitle.type(projectTitleName);

    //Enter Name 
    const name = cy.get('#Name');
    name.type(enterName);

    //Click save & close button
    const save = cy.get('#create_task > .mat-button-wrapper');
    save.click();
    this.mySubmittedTasks();

  }
  mySubmittedTasks() {
    const clickSubmittedTasks = new MySubmittedTasksPage();
    clickSubmittedTasks.mySubmittedTasks();
  }
}
export default LaunchProjectsPage;
