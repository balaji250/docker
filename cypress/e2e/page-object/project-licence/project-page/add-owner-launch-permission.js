/// <reference types="cypress" />

class AddOwnerAndLauchPermission {

    addownerandlauchpermission(projectdata) {

        //click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click taskboard security
        const taskboardSecurity = cy.get('#taskboard_security > .mat-button-wrapper > div > .font-weight-normal');
        taskboardSecurity.click();

        //click edit icon in the taskboard security
        const taskboardSecurityEdit = cy.get('#ownersEdit');
        taskboardSecurityEdit.click();

        //enter the values in user search field
        const userSearch = cy.get('.mat-form-field-infix > #search');
        userSearch.type(projectdata.User);

        //Select the owner.
        cy.contains('automation project').click();

        //Save the Owner
        const saveOwner = cy.get('#Confirm');
        saveOwner.click();

        //To check whether the selected owner's name is right as per the given owner's name
        cy.contains('AP').should('be.visible');

        //Click Launch Permission Edit Icon
        const launchPermissionEdit = cy.get('#launch_edit');
        launchPermissionEdit.click();

        //Click the Select User Dropdown
        // const selectUser = cy.get('#mat-select-value-43 > .mat-select-placeholder');
        const selectUser = cy.get('#allowUsersList');
        selectUser.click();

        //Select the user.
        cy.contains('Admin Admin').click();

        cy.contains('Automation User1').click();

        //Click the Background of the pop-up
        cy.get('.cdk-overlay-transparent-backdrop').click();


        const selectTeam = cy.get('#allowTeamsList');
        selectTeam.click();

        //Select team
        cy.contains('Automation Project').click();

        //Click the Background of the pop-up
        cy.get('.cdk-overlay-transparent-backdrop').click();

        //enable the taskboard users
        const projectuser = cy.get('#allowTaskboardUser > .mat-checkbox-layout > .mat-checkbox-label');
        projectuser.click();

        //enable Taskboard Temas
        const projectTeams = cy.get('#allowTaskboardTeams > .mat-checkbox-layout > .mat-checkbox-label');
        projectTeams.click();

        //save the permission
        const savePermission = cy.get('form.ng-valid > [fxlayoutalign="end end"] > .mat-primary');
        savePermission.click();

        //To check whether the selected taskboard user is shown
        cy.contains('Project Users').should('be.visible');

        //To check whether the selected taskboardteam is shown
        cy.contains('Project Teams').should('be.visible');

        //close the pop-up
        const close = cy.get('#clear_icon');
        close.click();

    }
}


export default AddOwnerAndLauchPermission;