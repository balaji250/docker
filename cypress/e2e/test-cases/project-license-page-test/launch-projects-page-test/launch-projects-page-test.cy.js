

/// <reference types="cypress" />
import {
    slowCypressDown
} from 'cypress-slow-down'
slowCypressDown()

import LaunchProjectsPage from '../../../page-object/project-licence/launch-projects/launch-projects-page.js'
import LicensePage from '../../../page-object/license-page/license-page.js'

describe('Launching Projects', () => {
    beforeEach('testing', function () {
        cy.fixture(Cypress.env('applicationdata')).then((user) => {
            //Valid username and password
            cy.login(user.Email, user.Password)
            this.userd = user;
        })
    })

    it('Launch Projects', {
        tags: 'smoke'
    }, function () {
        const licensePage = new LicensePage();
        const projectsPage = new LaunchProjectsPage();
        //Switch To YoroProject License
        licensePage.projectLicense();
        projectsPage.launchProjects(this.userd.ProjectName,this.userd.ProjectTitleName, this.userd.EnterName);


    })


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from

        // failing the test
        return false;
    })

})
