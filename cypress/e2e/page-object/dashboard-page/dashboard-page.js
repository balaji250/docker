/// <reference types="cypress" />


import CreateDashboardPage from './create-dashboard-page.js';
import ExistingDashboard from './existing-dashboard-page.js';

class DashboardPage {
    //Creating a New Dashboard
    createDashboard(dashboarddata) {
        const createDashboard = new CreateDashboardPage()
        createDashboard.createDashboard(dashboarddata)
    }
    existingDashboard(dashboarddata){
        const existingDashboard = new ExistingDashboard()
        existingDashboard.existingDashboard(dashboarddata)

    }



}
export default DashboardPage;