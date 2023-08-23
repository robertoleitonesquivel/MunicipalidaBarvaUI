import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  public readonly loader$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public show(): void {
    this.loader$.next(true);
  }

  public hide(): void {
    this.loader$.next(false);
  }
}
