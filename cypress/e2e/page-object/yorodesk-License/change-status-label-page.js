/// <reference types="cypress" />

class Statuschange {

   changestatus(yorodeskdata) {

   // select task 
      const selectTask = cy.get('#subject_1');
      selectTask.click();


      //select status
      const selectStatus = cy.get('#status_chip');
      selectStatus.click();

      //open task 

      const openTask = cy.get('#status_1');
      openTask.click();

      // click label 
      const clickLabel = cy.get('span.ng-star-inserted > .mat-icon');
      clickLabel.click();

      //Create Label
      const createLabel = cy.get('#addLabel');
      createLabel.click();

      // Enter Label name
      const labelName = cy.get('#mat-input-81');
      labelName.type(yorodeskdata.LabelName);


      // save label
      const saveLabel = cy.get('#createLabel');
      saveLabel.click()
      cy.wait(1000)

      // Select label 
      const selectLabel = cy.get('#labelButton_0');
      selectLabel.click()

      //close the popup 
      const close = cy.get('[fxlayoutalign="space-between center"] > .mat-focus-indicator');
      close.click()

      // back to task 
      const backTask = cy.get('.mat-button-wrapper > .mat-icon');
      backTask.click()


   }

}
export default Statuschange























