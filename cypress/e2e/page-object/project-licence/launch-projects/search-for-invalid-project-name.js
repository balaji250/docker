
import MySubmittedTasksPage from './my-submitted-tasks-page.js';

class SearchForInvalidProjectPage{
    searchForInvalidProject(invalidProjectName ) {
        // Click on the Projects menu
        const projectsMenu = cy.get('.active > .mat-icon');
        projectsMenu.click();
    
        //click search Box
        const searchBox = cy.get('#search');
        searchBox.click();
    
        //Type the Projects name
        searchBox.type(invalidProjectName);
    
        //click search icon
        const searchIcon = cy.get('.input-suffix');
        searchIcon.click();
    }      
}
export default SearchForInvalidProjectPage;