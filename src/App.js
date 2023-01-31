import React , {useReducer} from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { initialState } from './reducers/index';
import reducer from './reducers/index';
import { addOne,ADD_ONE, CLEAR_DISPLAY, applyNumber ,APPLY_NUMBER, CHANGE_OPERATION,MEMORY_ADD, MEMORY_TOTAL, MEMORY_RESET } from './actions';


function App() {
  const [state, dispatch]  = useReducer(reducer, initialState);

  function handleNumber(e) {
    dispatch(applyNumber(Number(e.target.value)));
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch ({type:MEMORY_ADD})} />
              <CalcButton value={"MR"} onClick={() => dispatch ({type:MEMORY_RESET})}/>
              <CalcButton value={"MC"} onClick={() => dispatch ({type:MEMORY_TOTAL})}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => handleNumber(e) }/>
              <CalcButton value={2} onClick={(e) => handleNumber(e) }/>
              <CalcButton value={3} onClick={(e) => handleNumber(e) }/>
            </div>

            <div className="row">
              <CalcButton value={4} 
                onClick={(e) => {dispatch(applyNumber(Number(e.target.value)));
              }}/>
              <CalcButton value={5} onClick={(e) => handleNumber(e)}/>
              <CalcButton value={6} onClick={(e) => handleNumber(e)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => handleNumber(e)}/>
              <CalcButton value={8} onClick={(e) => handleNumber(e)}/>
              <CalcButton value={9} onClick={(e) => handleNumber(e)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(e) => dispatch({type:CHANGE_OPERATION, payload:e.target.value })} />
              <CalcButton value={"*"} onClick={(e) => dispatch({type:CHANGE_OPERATION, payload:e.target.value })}/>
              <CalcButton value={"-"} onClick={(e) => dispatch({type:CHANGE_OPERATION, payload:e.target.value })}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch({type: CLEAR_DISPLAY})} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
