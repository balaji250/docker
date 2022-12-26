import MySubmittedRequestPage from './my-submitted-request-page.js';
import MyTaskPage from './my-task-page.js'

class LaunchWorkflowApplicationPage {
    launchWorkflow(workflowName, enterName) {
    // Click on the application menu
    const applicationMenu = cy.get('.active > .mat-icon');
    applicationMenu.click();

    //click search Box
    const searchBox = cy.get('#search');
    searchBox.click();

    //Type the taskboard or workflow name
    searchBox.type(workflowName);

    //click search icon
    const searchIcon = cy.get('.input-suffix');
    searchIcon.click();

    //click launch button on searched application
    const launchButton = cy.get('#task_0');
    launchButton.click();

    //Enter Name in the form
    const name = cy.get('#name');
    name.click().type(enterName);

    //Click submit changes
    const submitChanges = cy.get('#Submit');
    submitChanges.click();

    //Click Yes button in submit task popup
    const yesButton = cy.get('#submitTask');
    yesButton.click();

    //Click my submitted request tab
    const mySubmittedRequest = cy.get('#tabChange_2');
    mySubmittedRequest.click();

    //click workflow tab
    const workflow = cy.get('#mat-tab-label-0-0');
    workflow.click();

    //click view details button
    const viewDetails = cy.get(':nth-child(2) > .cdk-column-action > #openTask');
    viewDetails.click();

    //click close button
    const closeButton = cy.get('[style="margin-top: 5px; flex-direction: row; box-sizing: border-box; display: flex;"] > .ng-star-inserted > .mat-icon');
    closeButton.click();

    this.myTaskPage(enterName);
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
export default LaunchWorkflowApplicationPage;