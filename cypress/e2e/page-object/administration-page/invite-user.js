/// <reference types="cypress" />
class InviteUser {

    inviteUser(inviteuserdata) {
        // Click on the Administration menu
        const administrationMenu = cy.get(':nth-child(7) > .mat-icon');
        administrationMenu.click();

        //Click on the Invite user menu
        const inviteuserMenu = cy.get('#invite_user > .mat-button-wrapper');
        inviteuserMenu.click();

        //login email 
        const loginMail = cy.get('#email');
        loginMail.type(inviteuserdata.loginmail);

        //contact mail
        const contactemail = cy.get('#contactEmailId');
        contactemail.type(inviteuserdata.contactmail);

        // first name
        const firstname = cy.get('#firstName');
        firstname.type(inviteuserdata.firstname);

        //last name
        const lastname = cy.get('#lastName');
        lastname.type(inviteuserdata.lastname);

        //mobilenumber
        const mobilenumber = cy.get('#mobileNumber')
        mobilenumber.click();

        //Assosicate user with license
        const teamname = cy.get('#groupId > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
        teamname.click();

        //Select the team
        cy.contains("Durga Team").click();

        cy.get('.cdk-overlay-transparent-backdrop').click();

        //selecting digital workspace 
        const digitalworkspace =cy.get('#licence_0 > .mat-option-text');
        digitalworkspace.click();

        //click cancel button
        const cancelbutton = cy.get('#cancel > .mat-button-wrapper');
        cancelbutton.click();

        //associate user with roles
        const role = cy.get('#mat-select-value-15');
        role.dblclick();

        //selecting workflow user
        const workflowuser = cy.get('#mat-option-373 > .mat-pseudo-checkbox');
        workflowuser.click;

        

        //Rolestouser
        const roles = cy.get('#roleId > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
        roles.click();
        const roleselection = cy.get('#mat-option-392 > .mat-pseudo-checkbox');
        roleselection.click();

        // //Inviting user
        // const Invite = cy.get('#btninvite > .mat-button-wrapper');
        // Invite.click();



    }
}
export default InviteUser;