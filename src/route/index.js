import React from 'react'
import {Route} from 'react-router-dom'
import { Home } from '../page/home/components/home'
import { Brand } from '../page/brand/components/brandPage'
import { AppIntro } from '../page/appIntro/component/appIntro'
export const PageRouter = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/brand" component={Brand} />
        <Route path="/appIntro" component={AppIntro} /> 

        {/* <Route path="/about" component={About} />
        <Route path="/users" component={Users} /> */}
    </div>
)