export const types = {
    authLogin: '[auth] Login User',
    authLoginGit: '[auth] GitHub Login',
    clearAuthLogin:'[auth] Clear Auth Login',

    studentRegister: '[student] Register Student',
    studentGetInfo: '[student] Get Info Student',
    studentUpdateInfo: '[student] Update Info Student',
    studentSearch: '[student] Search Company', //-VERIFICAR-//

    registerCompany: '[company] Register Company',
    companySearch: '[company] Serch Company', //-VERIFICAR-//

    newProject: '[project] Create New Project',
    getProjects: '[project] Get Projects',
    projectsFilter: '[projects], get filtered projects',
    getProjectById: '[project] Get Project By Id',
    getCategory:'[project] Get Category',
    getMyProjectCompany:'[project]  Get My Project Company',

    showError: '[error] Show Error',
    clearError: '[error] Clear Error',
    
    AddStToPr:"[student] Add student to project",
    postulated: "[project] get student postulated",
    acceptStudent:"[Company] Student Accept",
    getStudentsInProject:"[Company] get students in projects "
};
