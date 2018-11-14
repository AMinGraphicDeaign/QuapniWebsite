import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { PageRouter } from './route';

import { Footer } from '../src/page/home/components/footer'
import { MobileMenu } from '../src/page/home/components/mobileMenu'
import { Responsive } from 'semantic-ui-react'
import { AllPageMenu } from '../src/page/home/components/allPageMenu'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  console.log('有東西嗎？')
  return (
    <BrowserRouter>
      <div>

        {/*  手 機 版 網 頁  */}
        <MobileMenu>
          <PageRouter />
          <Footer />
        </MobileMenu>

        {/*  電 腦 版 網 頁  */}
        <Responsive minWidth={900}>
          <AllPageMenu />
          <PageRouter />
          <Footer />
        </Responsive>

      </div>
    </BrowserRouter>
  )
}

export default App;
