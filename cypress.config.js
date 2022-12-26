const {
  defineConfig
} = require('cypress')




module.exports = defineConfig({
  env: {
    url: 'https://india.yoroflow.com',
    
    dashboarddata: 'india-data/dashboard-data.json',
    taskboarddata: 'india-data/taskboard-data.json',
    documentdata: 'india-data/document-data.json',
    logindata: 'india-data/login-data.json',
    datatabledata:'india-data/datatable-data.json',
    dashboarddata: 'india-data/dashboard-data.json',
    projectdata:'india-data/project-data.json',
    applicationdata:'india-data/application-data.json',
    inviteuserdata:'india-data/administration-data.json',
      yorodeskdata: 'india-data/yorodesk-data.json'
  },
  //  env: {
  // url: 'https://https://india.yoroflow.com/login',
  // dashboard:'india-data/dashboard-data.json',
  // taskboarddata: 'india-test-data/taskboard-data.json',
  // documentdata: 'india-test-data/document-data.json',
  // logindata: 'india-test-data/login-data.json',
  // datatabledata:'india-data/datatable-data.json',
  //   dashboarddata: 'india-data/dashboard-data.json',
  //     projectdata:'india-data/project-data.json'
  // },
  // env: {
  //   url: 'https://us-test.yoroflow.com',
  //   dashboarddata: 'india-data/dashboard-data.json',
  //   taskboarddata: 'us-test-data/taskboard-data.json',
  //   documentdata: 'us-test-data/document-data.json',
  //   logindata: 'us-test-data/login-data.json',
  //   datatabledata: 'us-test-data/datatable-data.json',
  //   dashboarddata: 'us-test-data/dashboard-data.json',
  //   projectdata: 'us-test-data/project-data.json'

  // },
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 8000,
    commandDelay: 900,

  },


  
  

})
