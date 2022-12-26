/// <reference types="cypress" />
class search{
searchoption(teamdetails){

//click on the teams menu
const team = cy.get(':nth-child(6) > .mat-icon');
team.click();

 //click on search box 
const searchbox = cy.get('#searchTeam');
searchbox.type(teamdetails.searchname);
    
//selecting user to deleted 
const userdelete=cy.get('#openTaskUserDialog');
userdelete.click();

//Select the user
const selectuser=cy.get('.mat-chip > span');
selectuser.click();

//Delete the selected user
const Deleteuser=cy.get('.mat-chip > .mat-icon');
Deleteuser.click();

//click on save button
const savebutton=cy.get('.mr-3 > .mat-button-wrapper');
savebutton.click();
}
}

export default search