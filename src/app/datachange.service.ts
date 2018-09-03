import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService {
    private navSource = new BehaviorSubject<string>('Default');
    navMessage = this.navSource.asObservable();

    constructor() { }

    navData(message: string) {
        this.navSource.next(message)
    }

}