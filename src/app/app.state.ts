import { State, Action, Selector } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}

export class Delete {
  static readonly type = 'Delete';
}

export class CountStateModel
{
  clicks : number;
  payload: string;

}

@State<CountStateModel>({
  name: 'count',
  defaults: 
  {
    clicks: 0,
    payload: "PL: "
  }
})
export class CountState {
  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState({
        payload: state.payload + "a",
        clicks: state.clicks + 1,
     }
    )
    };
  

  @Action(Delete)
  delete({ getState, setState }) {
    const state = getState();
    setState({
        payload: state.payload + "d",
        clicks: state.clicks - 1,
     }
    )
    };
  
    @Selector()
     static clicks(state: CountStateModel) : number  {
       return state.clicks;

     }

     @Selector()
     static payload(state: CountStateModel) : string  {
       return state.payload;

     }

  
}
