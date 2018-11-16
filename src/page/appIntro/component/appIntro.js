import React from 'react'
import app_Intro from '../../home/images/app_Intro.png'
import google_play from '../../home/images/google_play.png'
import apple_store from '../../home/images/apple_store.png'
import '../css/appIntro.css'
import { Responsive } from 'semantic-ui-react';


export const AppIntro = () => (
    <div>
        <title>APP介紹 - Quapni</title>

        <div className="ui container app-page-style clearfix">
            <Responsive maxWidth={700}>
                <div className="app-title"><b> Quapni Fishing APP </b></div>
            </Responsive>
            <div className="app-image-size"><img src={app_Intro} /></div>
            <div className="app-intro">
                <Responsive minWidth={768}>
                    <h1> 取得 Quapni Fishing APP </h1>
                </Responsive>
                <br />
                <br />
                <p>
                    我們結合時下最流行的社群平台，<br />
                    戶外釣魚、室內釣蝦 ;<br />
                    整合完備的即時氣象、釣點、<br />
                    釣具選擇、同好群組、店家資訊等，<br />
                    無論你在世界的哪個角落。 <br />
                    <br />
                    <b>Quapni Fishing</b> <br />
                    <b>讓您的作釣生活更有趣、更便利。</b>
                </p>
                <div className="app-google-apple">
                    <img src={google_play} />
                </div>
                <div className="app-google-apple">
                    <img src={apple_store} />
                </div>
            </div>
        </div>
    </div>

)