import React from 'react'
import {Route} from 'react-router-dom'
import { Home } from '../page/home/components/home';

export const PageRouter = () => (
    <div>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/users" component={Users} /> */}
    </div>
)