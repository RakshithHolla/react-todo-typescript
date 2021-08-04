import './App.css';
import Container from '@material-ui/core/Container';

import { BrowserRouter, Route } from "react-router-dom";
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';
import Classtest from './Classtest';
import LifeCycleMethods from './LifeCycleMethods';
import UseState from './UseState';
import UseEffectParent from './UseEffectParent';
import GetResponseApi from './GetResponseApi';
import TodosApi from './TodosApi';
import UseContext from './UseContext';
import ReducerUiExample from './ReducerUiExample';
import BigBasketApi from './BigBasketApi';


function App() {
  return (
    <>
      <Container maxWidth="sm">
        <BrowserRouter>
          <Route exact={true} path="/a" component={ScreenA} />
          <Route exact={true} path="/b" render={renderB} />
          <Route exact={true} path="/c/:id" render={renderC} />

          <Route exact={true} path="/LifeCycleMethods" component={LifeCycleMethods} />

          <Route exact={true} path="/UseState" component={UseState} />
          <Route exact={true} path="/UseEffectParent" component={UseEffectParent} />

          <Route exact={true} path="/GetResponseApi" component={GetResponseApi} />
          <Route exact={true} path="/TodosApi" component={TodosApi} />

          <Route exact={true} path="/UseContext" component={UseContext} />
          <Route exact={true} path="/UseContext" component={UseContext} />

          <Route exact={true} path="/ReducerUiExample" component={ReducerUiExample} />

          <Route exact={true} path="/BigBasketApi" component={BigBasketApi} />
        </BrowserRouter>
        {/*<Classtest message="This is a class based component" />*/}
      </Container>
    </>
  );
}

// function renderLifeCycleMethods(): JSX.Element{
//   return <LifeCycleMethods message={"parent invoked this"} count={10} />
// }

function renderB(){
  return <ScreenB message={"Parent calling"} />
}

function renderC(props: any){
  return <ScreenC {...props} />
}

export default App;
