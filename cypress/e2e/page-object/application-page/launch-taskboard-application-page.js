import MySubmittedRequestPage from './my-submitted-request-page.js';
import MyTaskPage from './my-task-page.js'

class LaunchApplicationPage {
  launchTaskboard(taskboardName, taskTitleName, enterName) {
    // Click on the application menu
    const applicationMenu = cy.get('.active > .mat-icon');
    applicationMenu.click();

    //click search Box
    const searchBox = cy.get('#search');
    searchBox.click();

    //Type the taskboard or workflow name
    searchBox.type(taskboardName);

    //click search icon
    const searchIcon = cy.get('.input-suffix');
    searchIcon.click();

    //click launch button on searched application
    const launchButton = cy.get('#task_0');
    launchButton.click();

    //Enter task title 
    const taskTitle = cy.get('#taskTitle');
    taskTitle.type(taskTitleName);

    //Enter Name 
    const name = cy.get('#Name');
    name.type(enterName);

    //Click save & close button
    const save = cy.get('#create_task > .mat-button-wrapper');
    save.click();
    this.mySubmittedRequest();

  }

 

  mySubmittedRequest() {
    const clickSubmittedRequest = new MySubmittedRequestPage();
    clickSubmittedRequest.mySubmittedRequest();
  }

  myTaskPage(enterName) {
    const clickMyTask = new MyTaskPage();
    clickMyTask.myTaskPage(enterName);

  }
}
export default LaunchApplicationPage;