// / <reference types="cypress" />

import LaunchApplicationPage from './launch-taskboard-application-page.js';
import LaunchWorkflowApplicationPage from './launch-workflow-application-page.js';


class ApplicationPage 
{
    launchTaskboard(taskboardName,taskTitleName,enterName)
    {
     const clickLaunchTaskboard =  new LaunchApplicationPage();
     clickLaunchTaskboard.launchTaskboard(taskboardName,taskTitleName,enterName);
    }

    

    launchWorkflow(workflowName,enterName) 
    {
        const clickLaunchWorkflow =  new LaunchWorkflowApplicationPage();
        clickLaunchWorkflow.launchWorkflow(workflowName,enterName);
    }

    
}

export default ApplicationPage;

