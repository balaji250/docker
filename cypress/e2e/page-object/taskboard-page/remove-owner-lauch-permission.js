/// <reference types="cypress" />

class RemoveOwnerAndLauchPermission {

    removeownerandlauchpermission() {

//click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click taskboard security
        const taskboardSecurity = cy.get('#taskboard_security > .mat-button-wrapper > div > .font-weight-normal');
        taskboardSecurity.click();

        //click edit icon in the taskboard security
        const taskboardSecurityEdit = cy.get('#cdk-step-content-0-0 > :nth-child(2) > .mb-3 > .mat-icon');
        taskboardSecurityEdit.click();

        //Select the owner.
        cy.contains('Automation User1').click();

        //Save the Owner
        const saveOwner = cy.get('#task-configur > [fxlayoutalign="end"] > .mat-primary > .mat-button-wrapper');
        saveOwner.click();

        //Click Launch Permission Edit Icon
        const launchPermissionEdit = cy.get('.col-md-2 > .mat-icon');
        launchPermissionEdit.click();

        //enable the taskboard users
        const taskboarduser = cy.get('#allowTaskboardUser > .mat-checkbox-layout > .mat-checkbox-label');
        taskboarduser.click();

        //enable Taskboard Temas
        const taskboardTeams = cy.get('#allowTaskboardTeams > .mat-checkbox-layout > .mat-checkbox-label');
        taskboardTeams.click();

        //save the permission
        const savePermission = cy.get('form.ng-valid > [fxlayoutalign="end end"] > .mat-primary');
        savePermission.click();

        //Click Button Save
        const nextButton=cy.get('#btnSave');
        nextButton.click();

        //Save the All Permission
        const savePermission2=cy.get('.mat-stepper-next');
        savePermission2.click();
 }
 
}
export default RemoveOwnerAndLauchPermission;