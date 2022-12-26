// / <reference types="cypress" />

import CreateProjectScratch from './create-project-scratch.js'
import CreateProjectNameWithExistingName from './creating-project-with-existingname.js'
import CreateColumnNameWithExistingName from './column-name-with-existingname.js'
import CreatingDuplicateLabel from './creating-duplicate-label.js'
import CreatingDuplicateSubStatus from './duplicate-sub-status.js'
import CheckDuplicateCreatingTask from './check-for-duplicate-creating-task.js'
import ColumnAccessTeam from './column-access-team.js'
import CreateProjectExistingTemplate from './create-project-using-existing-template.js'
import ProjectFilter from './project-filter.js'
import LaunchPermission from './launch-permission.js'
import OwnerPermission from './owner-permission.js'
import DeleteColumAccessTeamProject from './delete-colum-access-team.js'
import ProjectListView from './project-list-view.js'


import AddSprint from './add-sprint-for-existing-project.js'
import DisableSprint from './disable-sprint-for-existing-sprint.js'

class ProjectPage {


    //Creating a Project From Scratch.
    createProjectFromScratch(projectData) {
        const projectScratch = new CreateProjectScratch();
        projectScratch.createProjectFromScratch(projectData);
    }

    //Creating the Project Name with already existing name
    createProjectNameWithExistingName(projectData) {
        const projectExistingName = new CreateProjectNameWithExistingName();
        projectExistingName.createProjectNameWithExistingName(projectData);
    }

    //Creating the Column Name with already existing name
    createColumnNameWithExistingName(projectData) {
        const columnExistingName = new CreateColumnNameWithExistingName();
        columnExistingName.createColumnNameWithExistingName(projectData);
    }

    //Creating Duplicate Label
    creatingDuplicateLabel(projectData) {
        const duplicateColumnName = new CreatingDuplicateLabel();
        duplicateColumnName.creatingDuplicateLabel(projectData);
    }

    //Creating Duplicate Sub Status
    creatingDuplicateSubStatus(projectData) {
        const duplicateSubStatus = new CreatingDuplicateSubStatus();
        duplicateSubStatus.creatingDuplicateSubStatus(projectData);
    }

    //Check for duplicates while creating task
    checkDuplicateCreatingTask(projectData) {
        const uniqueCheck = new CheckDuplicateCreatingTask();
        uniqueCheck.checkDuplicateCreatingTask(projectData);
    }
    //Creating a Project with an Existing Template.
    createProjectExistingTemplate(projectData) {
        const existingTemplate = new CreateProjectExistingTemplate();
        existingTemplate.createProjectExistingTemplate(projectData);
    }




    //Owner Permission
    ownerPermission(projectData) {
        const ownerPermission = new OwnerPermission();
        ownerPermission.ownerPermission(projectData);
    }

    //Launch Permission
    launchPermission(projectData) {
        const launchPermission = new LaunchPermission();
        launchPermission.launchPermission(projectData);
    }

    //Project Filter
    projectFilter(projectData) {
        const projectFilter = new ProjectFilter();
        projectFilter.projectFilter(projectData);
    }

    columnAccessTeam(projectData) {
        const columnAccessTeam = new ColumnAccessTeam();
        columnAccessTeam.columnAccessTeam(projectData);
    }

    //Delete Column Access Team
    deleteColumAccessTeamProject(projectData) {
        const deleteColumAccessTeamProject = new DeleteColumAccessTeamProject();
        deleteColumAccessTeamProject.deleteColumAccessTeamProject(projectData);

    }

    //Project List View
    projectListView(projectData) {
        const projectListView = new ProjectListView();
        projectListView.projectListView(projectData)


    }

  //Adding Sprint to already existing project
  addSprintForExistingProject(projectData){
    const addSprint = new AddSprint();
    addSprint.addSprintForExistingProject(projectData);
  }

    //Disabling Sprint for already Existing project
    disableSprintForExistingProject(){
        const disableSprint = new DisableSprint();
        disableSprint.disableSprintForExistingProject();
    }






}
export default ProjectPage;