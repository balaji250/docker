/// <reference types="cypress" />
import EditDocumentPage from "./edit-document-page.js";
import AddOwnerTeam from "./add-owner-team.js";
import RemoveOwnerTeam from "./remove-owner-team.js"
import ExportPDFWord from "./export-word-pdf.js"

class CreateDocumentPage {

    createDocument(documentDetails) {

        //Click on the document menu
        const documentMenu = cy.get('.pb-0 > :nth-child(5)');
        documentMenu.click();

        // Click on the new document icon.
        const createDocument = cy.get('#newDocument');
        createDocument.click();

        // Enter the document name.
        const documentName = cy.get('#title');
        documentName.type(documentDetails.DocumentName);

        // Enter the paragraph.
        const documentParagraph = cy.get('p');
        documentParagraph.type(documentDetails.DocumentParagraph);

        //Enter an image 
        const image= cy.get('.ql-image');
        image.click();
        

        // Click on the document save button.
        const documentSaveButton = cy.get('#save');
        documentSaveButton.click();

        //To check whether the given document title is same as per the given document title
        cy.get('.pr-0 > div > .mb-0').should('contain', 'Customer Requirement');

        //Click the Edit Icon
        const editOption = cy.get('#edit')
        editOption.click();

        //To check whether the given document paragraph is same as per the given document paragraph
        cy.get('#quill > .ql-editor > p').should('contain', 'Customer requirements refer to the specifications or features of a product or service that are deemed necessary by customers.');

        //Save the Document
        const saveDocument = cy.get('#update')
        saveDocument.click();

        //Editing the Already Existing Document
        this.editDocument(documentDetails);

        // Adding Owner and Team
        this.addOwnerTeam(documentDetails);

        //Export as PDF & Word
        this.exportPDFWord(documentDetails);

        this.removeOwnerTeam(documentDetails);

    }

    //Editing the Already Existing Document
    editDocument(documentDetails) {
        const editDocument = new EditDocumentPage();
        editDocument.editDocument(documentDetails);
    }

    // Adding Owner and Team
    addOwnerTeam(documentDetails) {
        const addOwnerTeam = new AddOwnerTeam();
        addOwnerTeam.addOwnerTeam(documentDetails);

    }

    //Export as PDF & Word
    exportPDFWord(documentname) {
        const exportPDF = new ExportPDFWord();
        exportPDF.exportPDFWord(documentname);
    }

      //Removing Owner and Team
      removeOwnerTeam(editdocumentname) {
        const removeOwnerTeam = new RemoveOwnerTeam();
        removeOwnerTeam.removeOwnerTeam(editdocumentname)
    }


}
export default CreateDocumentPage;