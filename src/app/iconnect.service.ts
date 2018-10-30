import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, ResponseContentType } from '@angular/http';
import { environment } from './environments/environment';
import 'rxjs';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable()
export class IconnectService {
    constructor(private _httpService: HttpClient) {
    }

    
     /**
     * To get the country
     */
    getCountryDetails(): Observable<any> {
        return this._httpService.get(environment.path.country_list);
    }
    /**
     * To get the state
     */
    getStateDetails(): Observable<any> {
        return this._httpService.get(environment.path.state_list);
    }

    /**
     * To get the state
     */
    getUniversityDetails(): Observable<any> {
        return this._httpService.get(environment.path.university_list);
    }

     /**
     * To get the state
     */
    getAllColleges(): Observable<any> {
        return this._httpService.get(environment.path.getAllColleges);
    }

    /**
     * To get the college list
     */
    collegeList(): Observable<any> {
        return this._httpService.get(environment.path.college_api);
    }
    /**
     * To get the college list
     */
    collegeListById(data): Observable<any> {
        return this._httpService.get(environment.path.college_api+'/'+ data);
    }
    /**
     * To create college
     */
    createCollege(requestBody): Observable<any> {
        return this._httpService.post(environment.path.college_api, requestBody);
    }
    /**
     * To update college list
     */
    updateCollege(requestBody): Observable<any> {
        return this._httpService.put(environment.path.college_api, requestBody);
    }
    /**
     * To delete college list
     */
    deleteCollege(requestBody): Observable<any> {
        return this._httpService.delete(environment.path.college_api + '/' + requestBody.id);
    }
    /**
     * To get the corporate list
     */
    corporateList(): Observable<any> {
        return this._httpService.get(environment.path.corporate_api);
    }
    /**
     * To get the corporate list by id
     */
    corporateListById(data): Observable<any> {
        return this._httpService.get(environment.path.corporate_api + '/' + data);
    }
    /**
     * To create Corporate
     */
    createCorporate(requestBody): Observable<any> {
        return this._httpService.post(environment.path.corporate_api, requestBody);
    }
    /**
     * To update corporate list
     */
    updateCorporate(requestBody): Observable<any> {
        return this._httpService.put(environment.path.corporate_api, requestBody);
    }
    /**
     * To delete corporate list
     */
    deleteCorporate(requestBody): Observable<any> {
        return this._httpService.delete(environment.path.corporate_api + '/' + requestBody.id);
    }

    /**
     * To get the pending approval list
     */
    pendingApprovalList(): Observable<any> {
        return this._httpService.get(environment.path.pendingapproval_list);
    }

    /**
     * To validate login details
     */
    loginService(requestBody): Observable<any> {
        return this._httpService.post(environment.path.loginService, requestBody);
    }

    /**
     * To post user sign in details
     */
    signUpService(requestBody): Observable<any> {
        return this._httpService.post(environment.path.signUpService, requestBody);
    }

     /**
     * To post user sign in details
     */
    forgotPasswordService(requestBody): Observable<any> {
        return this._httpService.get(environment.path.forgotPasswordService+'?username='+requestBody.username);
    }

     /**
     * To get the corporate list by id
     */
    pendingApprovalById(data): Observable<any> {
        return this._httpService.get(environment.path.pendingApprovalByIdService + '/' + data);
    }

    /**
     * Add new college
     */
    addNewCollege(requestBody): Observable<any> {
        return this._httpService.post(environment.path.add_college, requestBody);
    }

    /**
     * To update college list
     */
    updateNewCollege(requestBody): Observable<any> {
        return this._httpService.put(environment.path.add_college, requestBody);
    }

     /**
     * To delete college list
     */
    deleteNewCollege(requestBody): Observable<any> {
        return this._httpService.delete(environment.path.add_college + '/' + requestBody.id);
    }

    /**
     * To get the college list
     */
    getNewCollegeList(): Observable<any> {
        return this._httpService.get(environment.path.add_college);
    }

     /**
     * To get the college list
     */
    getNewcollegeById(data): Observable<any> {
        return this._httpService.get(environment.path.add_college+'/'+ data);
    }

    /**
     * To get the corporate list
     */
    getCorporateList(): Observable<any> {
        return this._httpService.get(environment.path.add_corporate);
    }
    /**
     * To get the corporate list by id
     */
    getCorporateListById(data): Observable<any> {
        return this._httpService.get(environment.path.add_corporate + '/' + data);
    }
    /**
     * To create Corporate
     */
    addNewCorporate(requestBody): Observable<any> {
        return this._httpService.post(environment.path.add_corporate, requestBody);
    }
    /**
     * To update corporate list
     */
    updateNewCorporate(requestBody): Observable<any> {
        return this._httpService.put(environment.path.add_corporate, requestBody);
    }
    /**
     * To delete corporate list
     */
    deleteNewCorporate(requestBody): Observable<any> {
        return this._httpService.delete(environment.path.add_corporate + '/' + requestBody.id);
    }

    /**
     * To get the corporate list by id
     */
    changePassword(data): Observable<any> {
        return this._httpService.get(environment.path.changePassword + '/' + data);
    }

    /**
     * To get the corporate list by id
     */
    getPendingApprovalForStudentReg(data): Observable<any> {
        return this._httpService.get(environment.path.pendingApprovalForStudentReg + '/' + data);
    }

    /**
     * To get the corporate list by id
     */
    getPendingApprovalForStudentRegById(data): Observable<any> {
        return this._httpService.get(environment.path.pendingApprovalForStudentRegById + '/' + data);
    }

    addNewStudent(requestBody): Observable<any> {
        return this._httpService.post(environment.path.student_api, requestBody);
    }

    updateStudent(requestBody): Observable<any> {
        return this._httpService.put(environment.path.student_api, requestBody);
    }

    getStudentDetailsById(data): Observable<any> {
        return this._httpService.get(environment.path.student_api+ '/' + data);
    }

    getStudentsByCollegeId(): Observable<any> {
        return this._httpService.get(environment.path.student_api+ '/college');
    }

    createNewJob(requestBody): Observable<any> {
        return this._httpService.post(environment.path.job, requestBody);
    }

    updateNewJob(requestBody): Observable<any> {
        return this._httpService.put(environment.path.job, requestBody);
    }

    getAllJobs(): Observable<any> {
        return this._httpService.get(environment.path.job);
    }

    createNewInternship(requestBody): Observable<any> {
        return this._httpService.post(environment.path.internship, requestBody);
    }

    updateNewInternship(requestBody): Observable<any> {
        return this._httpService.put(environment.path.internship, requestBody);
    }

    getAllInternship(): Observable<any> {
        return this._httpService.get(environment.path.internship);
    }

    updateHrProfile(requestBody): Observable<any> {
        return this._httpService.put(environment.path.hr_profile, requestBody);
    }

    getHrProfileDetails(): Observable<any> {
        return this._httpService.get(environment.path.hr_profile);
    }

    getPOProfileDetails(): Observable<any> {
        return this._httpService.get(environment.path.placementOfficer+"/profile");
    }

    updatePOProfileDetails(requestBody): Observable<any> {
        return this._httpService.put(environment.path.placementOfficer, requestBody);
    }

    uploadFile(requestBody): Observable<any> {
        return this._httpService.post(environment.path.uploadFile, requestBody);
    }

    
    
}
