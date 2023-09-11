import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, Delete, CountState } from './app.state';

@Component({
  selector: 'my-app',
  template: `
    <h1>Count is {{count$ | async}}</h1>
    <button (click)="onClick()">Click Me</button>
    <br>
    <button (click)="onClick2()">Delete Me</button>
  `
})
export class AppComponent  {

  @Select(CountState) count$: Observable<number>;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new Add());
  }

  onClick2()
  {
    this.store.dispatch(new Delete())

  }
  
}