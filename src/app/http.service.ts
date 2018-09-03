import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';
import 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class HttpServiceInterceptor implements HttpServiceInterceptor {
    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        let cloneChanges: any = {};

        //Add Base Url for all requests
        cloneChanges.url = environment.baseURI + req.url;

        cloneChanges.headers = req.headers.set('Content-Type', 'application/json');
        //Modify Request
        const dupReq = req.clone(cloneChanges)
        return next.handle(dupReq).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                }
            }, error => {
                console.error('NICE ERROR', error)
            })
        )
        /*// let user = JSON.parse(localStorage.getItem('user'));
        
        let cloneChanges: any = {};
        
        //Add Base Url for all requests
        cloneChanges.url = environment.baseURI + req.url;
        
        cloneChanges.headers = req.headers.set('Content-Type', 'application/json');
        //Modify Request
        const authReq = req.clone(cloneChanges)
        return next.handle(authReq).map((event:HttpEvent<any>) => {
        if(event instanceof HttpResponse && ~(event.status / 100) > 3){
        console.info('HttpResponse::event =', event, ';');
        //event.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
        }else console.info('event =', event, ';');
        return event;
        })
        .catch((err: any, caught) => {
        if(err instanceof HttpErrorResponse){
        if(err.status === 403){
        console.info('err.error =', err.error, ';');
        }
        //this.router.navigateByUrl('/');
        return Observable.throw("Session Invalid");
        }
        });*/
    }
}