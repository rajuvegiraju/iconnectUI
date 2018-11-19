// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURI: "http://localhost:8080/iconnect",
  path: {
    corporate_api: "/api/registration/corporate",
    college_api: "/api/registration/college",
    state_list: "/api/iconnect/state",
    country_list: "/api/iconnect/country",
    pendingapproval_list: "/api/iconnect/pendingapproval",
    loginService: "/api/login",
    signUpService: "/api/signUP",
    forgotPasswordService: "/api/forgetpassword",
    getAllColleges: "/api/collegeList",
    pendingApprovalByIdService: "/api/iconnect/pendingapproval",
    university_list: "/api/iconnect/universityList",
    add_college: "/api/college",
    add_corporate: "/api/corporate",
    changePassword: "/api/changePassword",
    pendingApprovalForStudentReg: "/api/placementofficer/pafsReg",
    pendingApprovalForStudentRegById: "/api/placementofficer/pafsRegById",
    student_api:"/api/student",
    job:"/api/hr/job",
    internship:"/api/hr/internship",
    hr_profile:"/api/hr/profile",
    placementOfficer:"/api/placementofficer",
    uploadFile:"/api/upload",
    locations:"/api/iconnect/location"
    
    
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
