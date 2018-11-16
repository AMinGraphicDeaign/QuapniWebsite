import React from 'react'
import '../css/footer.css'
import { Responsive } from 'semantic-ui-react'

import appIcon from '../images/app_icon.svg'
import facebookIcon from '../images/fb_icon.svg'
import instagramIcon from '../images/ig_icon.svg'
import yotubeIcon from '../images/yt_icon.svg'


export const Footer = () => (
    <div>
        <Responsive minWidth={1200}>
            <div className="ui inverted vertical footer segment">
                <div className="ui container">
                    <div className="ui stackable  divided equal height grid">

                        <div className="three wide column">
                            <h4>聯絡資訊</h4>
                            <div>
                                <p>
                                    台中市大雅區上山路184號<br />
                                    service@quapni.com.tw<br />
                                    04 - 25605778<br />
                                    <br />
                                    <br />
                                    <font size={3}> <b>  </b> </font>
                                    <br />
                                    <h4>服務時間</h4>
                                    09:00-17:00 (不含例假日)<br />
                                </p>
                            </div>
                        </div>
                        <div className="two wide column">
                            <h4>說明</h4>
                            <div className="ui inverted link list">
                                <a className="item" href="#"> 得獎認證 </a>
                                <a className="item" href="#"> 退貨規則 </a>
                                <a className="item" href="#"> 常見問題 </a>
                            </div>
                        </div>
                        <div className="seven wide column">
                            <h4>服務</h4>
                            <div className="ui inverted link list">
                                <a className="item" href="#"> 查找商家 </a>
                                <a className="item" href="#"> 客服中心 </a>
                            </div>
                        </div>


                        <div className="three wide column">
                            <h4>相關連結</h4>
                            <div className="ui inverted link list">
                                <a href="https://www.instagram.com/quapni/" target="_blank">
                                    <img className="icon-size" alt="instagramIcon" src={instagramIcon} />
                                </a>
                                <a href="https://www.facebook.com/quapni/" target="_blank">
                                    <img className="icon-size" alt="facebookIcon" src={facebookIcon} />
                                </a>
                                <a href="https://www.youtube.com/user/quapni" target="_blank">
                                    <img className="icon-size" alt="yotubeIcon" src={yotubeIcon} />
                                </a>
                            </div>
                        </div>
                        <div className="one wide column">
                            <h4>APP</h4>
                            <div className="ui inverted link list">
                                <a href="/appIntro">
                                    <img className="icon-size" alt="" src={appIcon} />
                                </a>
                            </div>
                        </div>


                        {  /*  分 隔 線  div  */}
                        <div className="separationline" />
                    </div>


                    <div className="footer-div">
                        <a href="#">隱私政策</a>
                        <a href="#">使用條款</a>
                        <a href="#">Cookie政策</a>
                    </div>


                </div>
            </div>
        </Responsive>

        <Responsive maxWidth={1200}>
            <div className="ui inverted vertical footer segment">
                <div className="ui container">
                    <div className="ui stackable inverted divided equal height grid">

                        <div className="five wide column">
                            <h4>聯絡資訊</h4>
                            <div>
                                <p>
                                    台中市大雅區上山路184號<br />
                                    service@quapni.com.tw<br />
                                    04 - 25605778<br />
                                    <br />
                                    <h4>服務時間</h4>
                                    09:00-17:00 (不含例假日)<br />
                                </p>
                            </div>
                        </div>
                        <div className="two wide column">
                            <h4>說明</h4>
                            <div className="ui inverted link list">
                                <a className="item" href="#"> 得獎認證 </a>
                                <a className="item" href="#"> 退貨規則 </a>
                                <a className="item" href="#"> 常見問題 </a>
                            </div>
                        </div>
                        <div className="two wide column">
                            <h4>服務</h4>
                            <div className="ui inverted link list">
                                <a className="item" href="#"> 查找商家 </a>
                                <a className="item" href="#"> 客服中心 </a>
                            </div>
                        </div>


                        <div className="four wide column">
                            <h4>相關連結</h4>
                            <div className="ui inverted link list">
                                <a href="https://www.instagram.com/quapni/" target="_blank">
                                    <img className="icon-size" alt="instagramIcon" src={instagramIcon} />
                                </a>
                                <a href="https://www.facebook.com/quapni/" target="_blank">
                                    <img className="icon-size" alt="facebookIcon" src={facebookIcon} />
                                </a>
                                <a href="https://www.youtube.com/user/quapni" target="_blank">
                                    <img className="icon-size" alt="yotubeIcon" src={yotubeIcon} />
                                </a>
                            </div>
                        </div>
                        <div className="one wide column">
                            <h4>APP</h4>
                            <div className="ui inverted link list">
                                <a href="/appIntro">
                                    <img className="icon-size" alt="" src={appIcon} />
                                </a>
                            </div>
                        </div>


                        {  /*  分 隔 線  div  */}
                        <div className="separationline" />
                    </div>


                    <div className="footer-div">
                        <a href="#">隱私政策</a>
                        <a href="#">使用條款</a>
                        <a href="#">Cookie政策</a>
                    </div>


                </div>
            </div>
        </Responsive>
    </div>

)