/// <reference types="cypress" />

class CreateEventAutomation {

    createEventAutomation(taskboardData) {

        //click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click the taskboard configuration menu
        const taskboardConfiguration = cy.get('#event_automation > .mat-button-wrapper > div > .font-weight-normal');
        taskboardConfiguration.click();


        //click on status change scenario first
        const statusChangeScenario = cy.get('#category_0_0');
        statusChangeScenario.click();

        //click on choose action
        const statusChange = cy.get('.condition-container > .actions-class');
        statusChange.click();

        //click on done stats
        const clickDone = cy.get('#status_3');
        clickDone.click();

        //click on someone action
        const someoneAction = cy.get('.action-container > :nth-child(2)');
        someoneAction.click();

        //enter the customer user email
        const customerMail = cy.get('#mat-chip-list-input-2');
        customerMail.type(taskboardData.CustomerMail);

        //click on email setting dropdown
        const emailSettingdropdown = cy.get('#mat-select-value-49 > .mat-select-placeholder');
        emailSettingdropdown.click();

        //Select the SMTP
        const selectSMTP = cy.contains('Durgasmtp');
        selectSMTP.click();

        //click on Apply Button
        const applyButton = cy.get('[fxlayoutalign="end end"] > .mat-focus-indicator');
        applyButton.click();

        //enter the message
        const messageAlert = cy.get('p');
        messageAlert.type(taskboardData.MessageContent);

        //save the message
        const saveMessage = cy.get('[fxlayoutalign="end"] > .mat-focus-indicator');
        saveMessage.click();

        //Save the Event Automation
        const saveEvent=cy.get('[fxlayoutalign="end end"] > .mat-focus-indicator > .mat-button-wrapper');
        saveEvent.click();

        cy.contains('durga.peruran@yorosis.com').should('be.visible');

        //close the pop-up
        const closePopup=cy.get('#close');
        closePopup.click();

        //open the task
        const openTask=cy.get(':nth-child(1) > #openTask > .mat-card-content > #above_badge');
        openTask.click();

        //Click Add Subtask Menu
      const subTaskMenu = cy.get('#catagory_1 > .mat-button-wrapper > [fxlayoutalign="space-between center"] > [fxlayout="row"] > span');
      subTaskMenu.click();

      //click on change status icn
      const statusIcon=cy.get('div.ng-untouched > .fa-solid');
      statusIcon.click();

      //click on Done Column
      const clickDoneStatus=cy.get('#status_2 > .mat-button-wrapper > div');
      clickDoneStatus.click();

      //click on over all save button
      const savesubTask=cy.get('.mr-3 > .mat-button-wrapper');
      savesubTask.click();

      //open the task
        const openParentTask=cy.get(':nth-child(1) > #openTask > .mat-card-content > #above_badge');
        openParentTask.click();

      //click the Status
      const clickStatus = cy.get('.status-box');
      clickStatus.click();

      //Click the In Progress Status
      cy.get('.mat-menu-content').contains('Done').click();

      

      //click on over all save button
      const saveAll=cy.get('.mr-3 > .mat-button-wrapper');
      saveAll.click();




    }
}


export default CreateEventAutomation;