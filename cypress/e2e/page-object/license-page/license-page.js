// / <reference types="cypress" />

class LicensePage { // Switch To Digital License
    digitalLicense() {
        const digitalLicense = cy.get('#license_0');
        digitalLicense.click();
        this.licenseConfirmation();
    }

    // Switch To Workflow License
    workflowLicense() {
        const workflowLicense = cy.get('#license_1');
        workflowLicense.click();
        this.licenseConfirmation();
    }

    // Switch To Yorodesk License
    yorodeskLicense() {
        const yorodeskLicense = cy.get('#license_3')
        yorodeskLicense.click();
        this.licenseConfirmation();
    }
    // Switch To Yoroboard License
    taskboardLicense() {
        const taskboardLicense = cy.get('#license_2');
        taskboardLicense.click();
        this.licenseConfirmation();
    }
    // Switch To Project License
    projectLicense() {
        const projectLicense = cy.get('#license_4');
        projectLicense.click();
        this.licenseConfirmation();

    }
    // Click Confirm Button in Pop-Up
    licenseConfirmation() {
        const licenseConfirmation = cy.get('#btnYes > .mat-button-wrapper');
        licenseConfirmation.click();

        
    }
}
export default LicensePage
