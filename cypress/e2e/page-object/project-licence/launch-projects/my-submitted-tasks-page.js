

class MySubmittedTasksPage
{
    mySubmittedTasks()
    {
        //click on my submitted tasks
        const clickMySubmittedTasks=cy.get('#tabChange_1');
        clickMySubmittedTasks.click();

        //click on viewdetails button
        const viewDetails=cy.get(':nth-child(2) > .cdk-column-action > #openTask');
        viewDetails.click();

        //To check whether the given name is same as per the name in form
        cy.get('#taskTitle').should('have.value', 'ProjectTask');

        //Click on cancel button
        const cancelButton=cy.get("#cancel");
        cancelButton.click();

    }
}

export default MySubmittedTasksPage;