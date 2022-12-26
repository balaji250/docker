class MyTaskPage {
    myTaskPage(enterName) {

        //click My tasks tab
        const myTaskTab = cy.get('#tabChange_1');
        myTaskTab.click();

        //click view details button
        const viewDetails =cy.get('#View_Details_95e783ac-cb05-4c5a-863d-d082f21f0be6');
        viewDetails.first().click();

        //enter any name
        const name = cy.get("#Name");
        name.type(enterName);

        //Click submit button
        const submitChanges = cy.get('#Submit');
        submitChanges.click();

        //Click Yes button in submit task popup
        const yesButton = cy.get('#submitTask');
        yesButton.click();

        //Click my submitted request tab
        const mySubmittedRequest = cy.get('#tabChange_2');
        mySubmittedRequest.click();

        //click workflow tab
        const workflow = cy.get('#mat-tab-label-1-0');
        workflow.click();

        // //click view details button
        // const viewDetailsButton = cy.get(':nth-child(2) > .cdk-column-action > #openTask');
        // viewDetailsButton.click();

        // //click close button
        // const closeButton = cy.get('[style="margin-top: 5px; flex-direction: row; box-sizing: border-box; display: flex;"] > .ng-star-inserted > .mat-icon');
        // closeButton.click();

        const dueDate=cy.get(':nth-child(2) > .cdk-column-dueDate > [fxlayout="row"] > :nth-child(2) > .mat-icon');
        dueDate.click();

    }
}

export default MyTaskPage;