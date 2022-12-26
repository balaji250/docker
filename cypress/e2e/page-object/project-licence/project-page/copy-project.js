/// <reference types="cypress" />


class CopyProject {
    copyProject(projectdata) {

        //Click the Action Button
        const actionButton = cy.get('#taskboard_menu');
        actionButton.click();

        //Click Copy Project
        const copyProject = cy.get('#copy_taskboard > .mat-button-wrapper > div > .font-weight-normal');
        copyProject.click();


        //Enter the Project Name
        const projectName = cy.get('#task_board_name');
        projectName.type(projectdata.CopyProjectName);


        //Click next Button
        const nextButtonpage =cy.get('#nextBtn2');
        nextButtonpage.click();


        // Click Next Button to Select the Form
        const nextButton = cy.get('#nextBtn3');
        nextButton.click();
        // Click Next Button to Enable the Sprint
        const clickNext = cy.get('#nextBtn4');
        clickNext.click();

        // Click Save Button to Create Project
        const save = cy.get('#save');
        save.click();
        cy.wait(2000)

        // Click Skip Button
        const skip = cy.get('#cancelBtn');
        skip.click()


    }



}

export default CopyProject;