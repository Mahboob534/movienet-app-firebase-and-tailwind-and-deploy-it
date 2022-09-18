import React from "react";
import Main from "../components/main/Main";
import Rows from '../components/slider/Rows'
import requests from '../route/Request'
function Home() {
  return (
    <div>
      <Main />
      <Rows rowId='1'   title=' به زودی ' fetchURL={requests.requestUpcoming} />
      <Rows  rowId='2' title='محبوب ' fetchURL={requests.requestPopular} />
      <Rows  rowId='3' title='در حال بخش' fetchURL={requests.requestTrending} />
      <Rows  rowId='4' title='پر بیننده' fetchURL={requests.requestTopRated} />
      <Rows  rowId='5' title='ترسناک' fetchURL={requests.requestHorror} />

    </div>
  );
}

export default Home;
