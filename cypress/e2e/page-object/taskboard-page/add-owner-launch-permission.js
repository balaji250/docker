/// <reference types="cypress" />

class AddOwnerAndLauchPermission {

    addownerandlauchpermission(taskboardData) {

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
        userSearch.type(taskboardData.User);

        //Select the owner.
        cy.contains('Automation User1').click();

        //Save the Owner
        const saveOwner = cy.get('#Confirm');
        saveOwner.click();
        //To check whether the selected owner's name is right as per the given owner's name
        cy.contains('AU').should('be.visible');

        //Click Launch Permission Edit Icon
        const launchPermissionEdit = cy.get('#launch_edit');
        launchPermissionEdit.click();

        //Click the Select User Dropdown
        // const selectUser = cy.get('#mat-select-value-43 > .mat-select-placeholder');
        const selectUser= cy.get('#allowUsersList');
        selectUser.click();

        //Select the user.
        cy.contains('Admin Admin').click();

        //Click the Background of the pop-up
        cy.get('.cdk-overlay-transparent-backdrop').click();

        //Click the Select Team Dropdown
        // const selectTeam = cy.get('#mat-select-value-41 > .mat-select-placeholder');
        // selectTeam.click();

        const selectTeam= cy.get('#allowTeamsList');
        selectTeam.click();

        //Select team
        cy.contains('Automation Team').click();

        //Click the Background of the pop-up
        cy.get('.cdk-overlay-transparent-backdrop').click();

        //enable the taskboard users
        const taskboarduser = cy.get('#allowTaskboardUser > .mat-checkbox-layout > .mat-checkbox-label');
        taskboarduser.click();

        //enable Taskboard Temas
        const taskboardTeams = cy.get('#allowTaskboardTeams > .mat-checkbox-layout > .mat-checkbox-label');
        taskboardTeams.click();

        //save the permission
        const savePermission = cy.get('form.ng-valid > [fxlayoutalign="end end"] > .mat-primary');
        savePermission.click();

        //To check whether the selected taskboard user is shown
        cy.contains('Taskboard Users').should('be.visible');

        //To check whether the selected taskboardteam is shown
        cy.contains('Taskboard Teams').should('be.visible');

        //close the pop-up
        const close = cy.get('#clear_icon');
        close.click();

    }
}


export default AddOwnerAndLauchPermission;