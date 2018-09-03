import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, ResponseContentType } from '@angular/http';
import { environment } from '../environments/environment';
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
}
