/// <reference types="cypress" />

class EditDocumentPage {
    editDocument(documentDetails) {

        //Click Edit Icon
        const editIcon = cy.get('#editName');
        editIcon.click();

        //Enter the new Document Name
        const newDocumentname = cy.get('.mt-2 > .input-group > .form-control');
        newDocumentname.clear()
        newDocumentname.type(documentDetails.EditDocumentName)

        // Save the Document Title
        const saveTitle = cy.get('#saveTitle > .mat-icon');
        saveTitle.click();


        //To check whether the given document title is same as per the given document title
        cy.get('.pr-0 > div > .mb-0').should('contain', 'Edit');

        //Click the Edit Icon
        const editOption = cy.get('#edit')
        editOption.click();

        // Enter the Paragraph
        const enterParagraph = cy.get('#quill > .ql-editor');
        enterParagraph.clear();
        enterParagraph.type(documentDetails.EditParagraph);

        //To check whether the given document paragraph is same as per the given document paragraph
        cy.get('#quill > .ql-editor > p').should('contain', 'Edit');

        // Save the Document
        const saveDocument = cy.get('#update')
        saveDocument.click();

 }

}
export default EditDocumentPage;
