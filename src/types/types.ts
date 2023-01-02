export const types = {
    authLogin: '[auth] Login User',
    authLoginGit: '[auth] GitHub Login',
    clearAuthLogin: '[auth] Clear Auth Login',
    login: '[login] Login',

    requestInProgress: '[request] Request In Progress',
    requestFinished: '[request] Request Finished',
    requestCleaned: '[request] Request Cleaned',

    getListStudents: '[student] Get List Students',
    studentRegister: '[student] Register Student',
    studentGetInfo: '[student] Get Info Student',
    studentUpdateInfo: '[student] Update Info Student',
    studentSearch: '[student] Search Company', //-VERIFICAR-//
    addStudentToProject: '[student] Add student to project',
    unApplyStudent: '[student] Un Applu student to project',
    deleteOrInactiveStudent: '[student] inactive student to data base',

    registerCompany: '[company] Register Company',
    companyGetInfo: '[company] Get info company',
    companyUpdateInfo: '[company] Update info company',
    companySearch: '[company] Serch Company', //-VERIFICAR-//
    acceptStudent: '[Company] Student Accept',
    deleteStudent: '[Company] Student delete',
    companyGetList: '[Company] Get list Company',
    deleteCompany: '[Company] Company delete',
    disableCompany: '[Company] disable Company',

    newProject: '[project] Create New Project',
    getProjects: '[project] Get Projects',
    projectsFilter: '[projects], get filtered projects',
    getProjectById: '[project] Get Project By Id',
    getCategory: '[project] Get Category',
    getMyProjectCompany: '[project]  Get My Project Company',
    filters: '[project] Filters',

    showError: '[error] Show Error',
    clearError: '[error] Clear Error',
    getAllProjects: '[project] get all Project',
};
