/// <reference types="cypress" />
class CreateWorkflow  {
    createWorkflow(workflowname) {
 //Click on the workflow menu
 const workflowMenu = cy.get('.active');
 workflowMenu.click();

 //Click on the new workflow icon.
 const createWorkflow = cy.get('.pb-0 > :nth-child(2) > .mat-icon');
 createWorkflow.click();

  // Click on create new workflow form scratch.
  const workflowName = cy.get('.child_menu > :nth-child(3)');
  workflowName.click();

  //creating workflow from scratch.
  const workflow = cy.get('#scratch > .font-weight-bold');
  workflowName.type(workflowname);

  
 const dataTransfer = new DataTransfer;
 cy.get('#START_TASK').trigger('dragstart', { dataTransfer });
 cy.get('.drawflow').trigger('drop', { dataTransfer });
    
 
 const dataTransfers = new DataTransfer;
 cy.get('#USER_TASK').trigger('dragstart', { dataTransfer });
 cy.get('.drawflow').trigger('drop', { dataTransfer });
 cy.get('#USER_TASK').trigger('mousedown', { which: 1, pageX: -20, pageY: +10 })
 //cy.get('#USER_TASK').trigger('mousedown', { button: 5})
 //cy.get('.drawflow').trigger('mousedown');
 //cy.get('#cdk-overlay-5').click().trigger('mousedown', 'bottomRight');
 //cy.get('.drawflow')
 //cy.get('#USER_TASK').trigger('mousemove', { clientX: -22, clientY: +20 });
 //cy.get('.drawflow').trigger('mouseup', 5, 4);

}




    }
   
    
export default CreateWorkflow;






/*const dataTransfer = new DataTransfer;

cy.get(draglocator)
    .first()
    .focus()
    .trigger('dragstart', { dataTransfer });
cy.get(droplocator)
    .eq(0)
    .trigger('drop', { dataTransfer });
cy.get(draglocator)
    .first()
    .trigger('dragend');
cy.get('.bCyIxT')
    .eq(0)
    .type('Hello Cypress');*/