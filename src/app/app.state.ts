import { State, Action, Selector } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}

export class Delete {
  static readonly type = 'Delete';
}


export class PayloadStateModel
{
  clicks : number;
  payload: string;
}

@State<PayloadStateModel>({
    name: "payload",
    defaults: 
    {
      clicks: 0,
      payload: "PL: "
    }
  })
export class PayloadState
{

  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState({
        payload: state.payload + "A",
        clicks: state.clicks + 1,
     }
    )
    };
  

  @Action(Delete)
  delete({ getState, setState }) {
    const state = getState();
    setState({
        payload: state.payload + "D",
        clicks: state.clicks - 1,
     }
    )
    };
  
    @Selector()
     static clicks(state: PayloadStateModel) : number  {
       return state.clicks;

     }

     @Selector()
     static payload(state: PayloadStateModel) : string  {
       return state.payload;

     }

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
    payload: "CNT: "
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
