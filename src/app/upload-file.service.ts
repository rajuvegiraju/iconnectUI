import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
 
  constructor(private http: HttpClient) { }
 
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    
    const formdata: FormData = new FormData();
 debugger;
    formdata.append('file', file);

    //var client = new HttpClient();
  //client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json; charset=utf-8");


    const req = new HttpRequest('POST', '/api/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    
    return this.http.request(req);
  
  }
 
  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }
}
