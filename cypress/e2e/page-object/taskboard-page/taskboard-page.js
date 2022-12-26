// / <reference types="cypress" />
import CreateExistingTemplate from './create-existing-template.js'
import CreateTaskboardScratch from './create-scratch-taskboard.js'
import ChangePriorityAndDescription from './edit-description-change-priority.js'
import CopyTaskboard from './copy-taskboard.js'
import AddTaskGridView from './add-task-grid-view.js'
import AddSprint from './add-sprint.js'


class TaskboardPage {
    //Creating a Taskboard with an Existing Template.
    createExistingTemplateTaskboard(existingtaskboardname) {
        const existingTemplate = new CreateExistingTemplate();
        existingTemplate.createExistingTemplateTaskboard(existingtaskboardname);
    }

    //Creating a Taskboard From Scratch.
    createTaskboardFromScratch(taskboardData) {
        const taskboardScratch = new CreateTaskboardScratch();
        taskboardScratch.createTaskboardFromScratch(taskboardData);
    }

    // //Change the priority and desscription
    // changePriorityDescription(taskboardData) {
    //     const changePriorityDescription = new ChangePriorityAndDescription();
    //     changePriorityDescription.changePriorityAndDescription(taskboardData)
    // }

    // //Copy Taskbaord
    // copyTaskboard(searchcreatedtaskboard, copytaskboardname, renamestatus, searchcopytaskboard) {
    //     const copyTaskboard = new CopyTaskboard();
    //     copyTaskboard.copyTaskboard(searchcreatedtaskboard, copytaskboardname, renamestatus, searchcopytaskboard)
    // }

    // //Add Task from Grid View
    // addTaskGridView(taskboardData) {
    //     const addTaskGridView = new AddTaskGridView();
    //     addTaskGridView.addTaskGridView(taskboardData)

    // }

    //Add Sprint
    addSprint(taskboardData){
        const addSprint = new AddSprint();
        addSprint.addSprint(taskboardData)

    }

    


}
export default TaskboardPage;