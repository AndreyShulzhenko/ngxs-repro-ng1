import { State, Action } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}

export class Delete {
  static readonly type = 'Delete';
}

class CountStateModel
{
  clicks : number;
  payload: string;

}

@State<CountStateModel>({
  name: 'count',
  defaults: 
  {
    clicks: 0,
    payload: ""
  }
})
export class CountState {
  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState({
      ...state,
        clicks: state.clicks + 1,
     }
    )
    };
  

  @Action(Delete)
  delete({ getState, setState }) {
    const state = getState();
    setState({
      ...state,
        clicks: state.clicks - 1,
     }
    )
    };
  

  
}
