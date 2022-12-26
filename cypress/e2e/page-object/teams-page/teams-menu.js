// / <reference types="cypress" />
import search from "./search-teamtest";
import CreateTeams from "./create-team-page";

class teamsmenupage{
    teams(teamname,description){
    const addteam= new CreateTeams();
    addteam.teams(teamname,description)
    }

    searchoption(searchname){
        const deleteteam=new search()
        deleteteam.searchoption(searchname);
    }
    

}
export default teamsmenupage