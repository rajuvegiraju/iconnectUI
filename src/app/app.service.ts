import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, ResponseContentType } from '@angular/http';
import { environment } from './environments/environment';
import 'rxjs/Rx';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable()
export class appService {
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
}
