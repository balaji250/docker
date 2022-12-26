// / <reference types="cypress" />

import CreateDocumentPage from './create-document-page.js';
import RemoveOwnerTeam from './remove-owner-team.js';


class DocumentPage {
    //Creating a New Document
    createDocument(documentDetails) {
        const createDocument = new CreateDocumentPage()
        createDocument.createDocument(documentDetails)
    }

  

}
export default DocumentPage;