import React from 'react'
import '../css/cardDesign.css'

import frontWheel from '../images/front_wheel.jpg'
import newArrival from '../images/new_arrival.jpg'
import quattro from '../images/quattro.jpg'
import thisIsUs from '../images/this_is_us.jpg'
import businessLocation from '../images/business_location.jpg'
import { Responsive } from 'semantic-ui-react';


export const CardDesign = () => (
    <div>
        <Responsive minWidth={768}>
            <div className="card-margin">
                <div className="ui stackable three column grid">
                    <div className="column grid-padding">
                        <a className="zoom-in" href="#">
                            <div className="grid-title"><b>關於我們</b></div>
                            <img alt="" src={thisIsUs} />
                        </a>
                    </div>
                    <div className="column grid-padding">
                        <a className="zoom-in" href="#">
                            <div className="grid-title"><b>最新商品</b></div>
                            <img alt="" src={newArrival} />
                        </a>
                    </div>
                    <div className="column grid-padding">
                        <a className="zoom-in" href="#">
                            <div className="grid-title"><b>商家據點</b></div>
                            <img alt="" src={businessLocation} />
                        </a>
                    </div>
                </div>
                <div className="ui stackable two column grid">
                    <div className="column grid-padding">
                        <a className="zoom-in" href="#">
                            <div className="grid-title"><b>前打輪</b></div>
                            <img alt="" src={frontWheel} />
                        </a>
                    </div>
                    <div className="column grid-padding">
                        <a className="zoom-in" href="#">
                            <div className="grid-title"><b>筏輪</b></div>
                            <img alt="" src={quattro} />
                        </a>
                    </div>
                </div>
            </div>
        </Responsive>

        <Responsive maxWidth={767}>
            <div className="card-margin">
                    <div className="grid-padding card-container">
                        <a className="zoom-in img-mask" href="#">
                            <h2 className="grid-title">這就是我們</h2>
                            <img alt="" src={thisIsUs} />
                        </a>
                    </div>
                    <div className="grid-padding card-container">
                        <a className="zoom-in img-mask" href="#">
                            <h2 className="grid-title">最新商品</h2>
                            <img alt="" src={newArrival} />
                        </a>
                    </div>
                    <div className="grid-padding card-container">
                        <a className="zoom-in img-mask" href="#">
                            <h2 className="grid-title">商家據點</h2>
                            <img alt="" src={businessLocation} />
                        </a>
                    </div>
                    <div className="grid-padding card-container">
                        <a className="zoom-in" href="#">
                            <h2 className="grid-title">前打輪</h2>
                            <img alt="" src={frontWheel} />
                        </a>
                    </div>
                    <div className="grid-padding card-container">
                        <a className="zoom-in" href="#">
                            <h2 className="grid-title">筏輪</h2>
                            <img alt="" src={quattro} />
                        </a>
                    </div>
            </div>
        </Responsive>
    </div>
)