

class MySubmittedRequestPage
{
    mySubmittedRequest()
    {
        //click on my submitted request
        const clickMySubmittedRequest=cy.get('#tabChange_2');
        clickMySubmittedRequest.click();

        //click on taskboard tab
        const clickTaskboard=cy.get('#mat-tab-label-0-1');
        clickTaskboard.click();

        //click on viewdetails button
        const viewDetails=cy.get(':nth-child(2) > .cdk-column-action > #openTask');
        viewDetails.click();

        //To check whether the given name is same as per the name in form
        cy.get('#taskTitle').should('have.value', 'SampleTask');

        //click cancel button
        const cancelButton=cy.get('#cancel');
        cancelButton.click();

        

    }
}

export default MySubmittedRequestPage;
