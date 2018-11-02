import React from 'react'
import '../css/hiddenMenu.css'
import quapni_logo from '../images/quapni_logo.svg'


export const HiddenMenu = () => (
    <div className="ui fixed hidden menu">
        <div className="header-content">
            <div className="header-logo">
                <img alt="quapni_logo" src={quapni_logo} style={{ width: 150 }} />
            </div>
            <div className="header-navigation hidden-menu-text">
                <li>
                    <a className="item">品牌故事</a>
                </li>
                <li>
                    <a className="item">商品總覽</a>
                </li>
                <li className="mega-dropdown" style={{ textAlign: 'left' }}>
                    <a className="browse item" href="#">
                        商品分類
					</a>
                    <div className="megamenu widget center">
                        <div className="hidden-blur" />
                        <div className="ui container">
                            <div className="ui five column relaxed equal height divided stackable grid">
                                <div className="column">
                                    <h2 className="ui header  header-color">前打輪</h2>
                                    <hr className="dividing-line"/>
                                    <div className="ui link list">
                                        <a className="item menu-text">納茲卡 Nazca</a>
                                        <a className="item menu-text">山茶 Camellia</a>
                                    </div>
                                </div>
                                <div className="column">
                                    <h2 className="ui header  header-color">裝備 / 配件</h2>
                                    <hr className="dividing-line"/>
                                    <div className="ui link list">
                                        <a className="item menu-text">碳纖維魚夾</a>
                                        <a className="item menu-text">水深探測棒</a>
                                    </div>
                                </div>
                                <div className="column">
                                    <h2 className="ui header  header-color">筏輪</h2>
                                    <hr className="dividing-line"/>
                                    <div className="ui link list">
                                        <a className="item menu-text">筏輪 Quattro</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
            <div style={{ marginRight: 30 }}>
                <ul className="nav right">
                    <li>
                        <a style={{ color: 'black' }} href="#">
                            登入&nbsp;｜&nbsp;註冊
							</a>
                    </li>
                    <li>
                        <a style={{ color: 'black' }} href="#">
                            <i className="shopping cart icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)