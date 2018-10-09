export const environment = {
  production: true,
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
    internship:"/api/hr/internship"
  }
};
