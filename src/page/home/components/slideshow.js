import React from 'react'
import '../css/slideshow.css'



export const Slideshow = () => (
    <div className="box-margin">
        <div className="carousel-wrapper">
            <span id="item-1" />
            <span id="item-2" />
            <span id="item-3" />
            <span id="item-4" />
            <div className="carousel-item item-1">
                <div className="slogan">
                    <h1 style={{ color: "#ffffff" }}>我們相信</h1>
                    <h1 style={{ color: "#ffffff" }}>唯有用心堅持</h1>
                    <h1 style={{ color: "#ffffff" }}>才能看見與眾不同</h1>
                </div>
                <a className="arrow arrow-prev" href="#item-4" />
                <a className="arrow arrow-next" href="#item-2" />
            </div>
            <div className="carousel-item item-2">
                <div><b>前打輪</b></div><br />
                <div className="paragraph-style">
                    <div>單款風格化。固定柄設計</div><br />
                    <div style={{ color: "#ff7576" }}>高品質輪座 堅固耐用</div>
                </div>
                <a className="arrow arrow-prev" href="#item-1" />
                <a className="arrow arrow-next" href="#item-3" />
            </div>
            <div className="carousel-item item-3">
                <div><b>山茶</b></div><br />
                <div className="paragraph-style">
                    <div>專利設計 - 壓鈕機構快拆</div><br />
                    <div style={{ color: "#ff7576" }}><b>1秒快速拆卸</b></div>
                </div>
                <a className="arrow arrow-prev" href="#item-2" />
                <a className="arrow arrow-next" href="#item-4" />
            </div>
            <div className="carousel-item item-4">
                <div><b>山茶</b></div><br />
                <div className="paragraph-notestyle">
                    <div>靈活無限。順暢無阻</div><br />
                    <div style={{ color: "#ff7576",fontSize:"3vmin" }}><b>日本第一品牌 NSK 培林</b></div>
                </div>
                <a className="arrow arrow-prev" href="#item-3" />
                <a className="arrow arrow-next" href="#item-1" />
            </div>
        </div>
    </div>
)
