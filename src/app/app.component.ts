import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, Delete, CountState, CountStateModel } from './app.state';

@Component({
  selector: 'my-app',
  template: `
    <h1>Count is {{clicks$ | async}}</h1>
    <button (click)="onClick()">Add Me</button>
    <br>
    <h1>Payload is {{count$ | async}}</h1>
    <br>
    <button (click)="onClick2()">Delete Me</button>
  `
})
export class AppComponent  {

  //@Select(state => state.payload) count$: Observable<string>;
  @Select(CountState.payload) count$: Observable<string>;

  @Select(CountState.clicks) clicks$: Observable<number>;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new Add());
  }

  onClick2()
  {
    this.store.dispatch(new Delete())

  }
  
}