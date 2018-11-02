import React from 'react'
import '../css/cardDesign.css'

import frontWheel from '../images/front_wheel.jpg'
import newArrival from '../images/new_arrival.jpg'
import quattro from '../images/quattro.jpg'
import thisIsUs from '../images/this_is_us.jpg'
import businessLocation from '../images/business_location.jpg'


export const CardDesign = () => (

    <div className="ui container" style={{ marginBottom: 150 }}>
        <div className="ui stackable three column grid" style={{ marginTop: 150 }}>
            <div className="column grid-padding">
                <a className="zoom-in" href="#">
                    <h2 className="grid-title">這就是我們</h2>
                    <img alt="" src={thisIsUs} />
                </a>
            </div>
            <div className="column grid-padding">
                <a className="zoom-in" href="#">
                    <h2 className="grid-title">最新商品</h2>
                    <img alt="" src={newArrival} />
                </a>
            </div>
            <div className="column grid-padding">
                <a className="zoom-in" href="#">
                    <h2 className="grid-title">商家據點</h2>
                    <img alt="" src={businessLocation} />
                </a>
            </div>
        </div>
        <div className="ui stackable two column grid">
            <div className="column grid-padding">
                <a className="zoom-in" href="#">
                    <h2 className="grid-title">前打輪</h2>
                    <img alt="" src={frontWheel} />
                </a>
            </div>
            <div className="column grid-padding">
                <a className="zoom-in" href="#">
                    <h2 className="grid-title">筏輪</h2>
                    <img alt="" src={quattro} />
                </a>
            </div>
        </div>
    </div>
)