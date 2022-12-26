/// <reference types="cypress" />
class CreateTeams{
teams(teamdetails){
    //click on the teams menu
    const team = cy.get(':nth-child(6) > .mat-icon');
    team.click();

    // click on new teams icon
    const newteams=cy.get('#add_team');
    newteams.click();

    //Entering team name
    const createteam=cy.get('#name');
    createteam.type(teamdetails.teamname);

    //Entering Description
    const Description=cy.get('#description');
    Description.type(teamdetails.description);

    //click on create team button
    const creatingteam=cy.get('#submit > .mat-button-wrapper')
    creatingteam.click();

    //click on search box to add team
    const teamsearch=cy.get('#mat-input-5');
    teamsearch.type(teamdetails.searchteam);

   //select the user 
   const usernames=cy.get(':nth-child(1) > #add > [fxlayout="row"] > [style="width: 35px; display: flex; padding-top: 3px; margin-right: 5px; flex-direction: column; box-sizing: border-box;"] > .user_letter');
   usernames.click();

   //select one more user
   const user1=cy.get(':nth-child(2) > .mat-card > [fxlayout="row"] > [style="width: 20%; display: flex; margin-right: 10px; flex-direction: column; box-sizing: border-box;"] > .user_letter');
   user1.click();
   
   //click on save button
   const save=cy.get('#btnsave > .mat-button-wrapper');
   save.click();

   


}
}
export default CreateTeams;