/// <reference types="cypress" />

class AddComment {

    addComment(taskboardData) {
        //Open the Created Task
        const openTask = cy.get('#openTask');
        openTask.click();

        //Click Add Comment Menu
        const commentMenu = cy.get('#catagory_3 > .mat-button-wrapper > [fxlayoutalign="space-between center"] > [fxlayout="row"] > span');
        commentMenu.click();

        //Enter the Comment
        const enterComment = cy.get('.ql-editor');
        enterComment.type(taskboardData.ParentTaskComment);

        //Click Add Comment Button
        const addComment = cy.get('.mat-button-wrapper > .ng-star-inserted');
        addComment.click();

        //To check if the added comment was added in the comment.
        cy.get('.comment-css > p').should('contain', 'This Issues is Fixed')

        //Click SubTask Menu
        const subTaskMenu = cy.get('#catagory_1 > .mat-button-wrapper > [fxlayoutalign="space-between center"] > [fxlayout="row"] > span');
        subTaskMenu.click();

        //Click View Sub Task Button
        const viewSubtask = cy.get('.fa-eye');
        viewSubtask.click();

        //Click Add Comment Menu
        const subtaskcommentMenu = cy.get('#catagory_3 > .mat-button-wrapper > [fxlayoutalign="space-between center"] > [fxlayout="row"] > span');
        subtaskcommentMenu.click();

        //Enter the Comment
        const enterCommentsubtask = cy.get('.ql-editor');
        enterCommentsubtask.type(taskboardData.SubTaskComment);

        //Click Add Comment Button
        const addCommentButton = cy.get('.mat-button-wrapper > .ng-star-inserted');
        addCommentButton.click();

        //To check if the added comment was added in the comment.
        cy.get('.comment-css > p').should('contain', 'This Issues is Fixed')


        // Click the Save and Close Button to Save the Changes Done
        const saveandclose = cy.get('.mr-3 > .mat-button-wrapper');
        saveandclose.click();


    }
}


export default AddComment;