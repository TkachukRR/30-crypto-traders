import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScreenWidthService {
  private screenWidthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(event: Event): void {
    this.screenWidthSubject.next(window.innerWidth);
  }

  public getScreenWidth(): Observable<number> {
    return this.screenWidthSubject.asObservable();
  }
}
