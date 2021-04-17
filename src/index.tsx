import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import moment from 'moment';
import { Home } from './views';
import 'antd/dist/antd.css';



const MainApp = (props: any) => {
  console.info(`RENDER : MainApp ${moment(process.env.BUILD_DATE).format("DD.MM.YYYY-HH:mm")}`);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
