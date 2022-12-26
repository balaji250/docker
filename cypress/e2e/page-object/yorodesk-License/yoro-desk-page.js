/// <reference types="cypress" />

import CreateYorodesk from './create-yorodesk-page.js';
import Gotoboard from './create-ticket-page.js'
import Openticket from './open-ticket-page.js'
import AddTaskInOutlookBoard from './addtask-outlook-page.js';

import Createsla from './create -sla-page.js';

import Statuschange from './change-status-label-page.js';

import DuplicateNameCheck from './duplicatenam-desk-page.js';

class YorodeskPage{

    createNewYorodesk(yorodeskdata){
        const createYorodesk=new CreateYorodesk();
        createYorodesk.createNewYorodesk(yorodeskdata)

    }

   createticket(yorodeskdata){
    const allBoard = new Gotoboard();
    allBoard.gotoboard(yorodeskdata)
   
}
openTicket(yorodeskdata){
const opentic = new Openticket();
opentic.openTicket(yorodeskdata)

}

    

addTaskInOutlookBoard(){
    const addTaskInOutlook = new AddTaskInOutlookBoard
    addTaskInOutlook.addTaskInOutlookBoard(SearchName,Subject,Description,Reply)
}
 
createsla (yorodeskdata){
    const createsla = new Createsla();
    createsla.createsla(yorodeskdata)

 
 }

 changestatus(yorodeskdata){
    const changestatus = new Statuschange();
    changestatus.changestatus(yorodeskdata)
 }

 dupllicatename(yorodeskdata){

    const duplicatename = new DuplicateNameCheck();
    duplicatename.dupllicatename(yorodeskdata)
 }

}
 export default YorodeskPage