import React from 'react'
import '../css/megaMenu.css'
import white_quapni_logo from '../images/quapni_logo_white.svg'
import { Responsive } from 'semantic-ui-react'
export const MegaMenu = () => (

    <div className="header-content">

        <Responsive minWidth={900}>
            <div className="header-logo">
                <img alt="quapni_logo" src={white_quapni_logo} style={{ width: 150 }} />
            </div>
        </Responsive>

        <div className="header-navigation">
            <Responsive minWidth={900}>
                <ul className="nav">
                    <li>
                        <a className="browse-item" href="">品牌故事</a>
                    </li>
                    <li>
                        <a className="browse-item" href="">商品總覽</a>
                    </li>
                    <li className="mega-dropdown" style={{ textAlign: 'left' }}>
                        <a className="browse-item" href="#" style={{ paddingTop: 16, paddingBottom: 20 }}>
                            商品分類
                    </a>
                        <div className="megamenu widget center">
                            <div className="blur" />
                            <div className="ui container">
                                <div className="ui five column relaxed equal height divided stackable grid">
                                    <div className="column">
                                        <h2 className="ui header header-color">前打輪</h2>
                                        <hr className="dividing-line" />
                                        <div className="ui link list">
                                            <a className="item menu-text">納茲卡 Nazca</a>
                                            <a className="item menu-text">山茶 Camellia</a>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <h2 className="ui header header-color">裝備 / 配件</h2>
                                        <hr className="dividing-line" />
                                        <div className="ui link list">
                                            <a className="item menu-text">碳纖維魚夾</a>
                                            <a className="item menu-text">水深探測棒</a>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <h2 className="ui header header-color">筏輪</h2>
                                        <hr className="dividing-line" />
                                        <div className="ui link list">
                                            <a className="item menu-text">筏輪 Quattro</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </Responsive>
        </div>

        <Responsive minWidth={900}>
            <div style={{ marginRight: 30 }}>
                <ul className="nav right">
                    <li>
                        <a className="browse-item" href="#">登入&nbsp;｜&nbsp;註冊</a>
                    </li>
                </ul>
            </div>
        </Responsive>

        <Responsive minWidth={900}>
            <div style={{ marginRight: 30 }}>
                <ul className="nav right">
                    <li>
                        <a className="browse-item" href="#">
                            <i className="shopping cart icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </Responsive>
    </div>

)
