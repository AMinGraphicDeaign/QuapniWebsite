import React from 'react'
import '../css/mobileMenu.css'
import quapni_logo from '../images/quapni_logo.svg'
import { Responsive } from 'semantic-ui-react'


export const MobileMenu = () => (

    <Responsive maxWidth={900}>
        <div className="ui fixed menu">
            <div className="header-content">
                {/* 漢 堡 圖 標 */}
                <div className="mobile-nav">
                    <a className="mobile-item" href="#">
                        <i className='sidebar icon' />
                    </a>
                </div>
                <div className="header-navigation">
                    <div>
                        <img alt="quapni_logo" src={quapni_logo} style={{ width: 120 }} />
                    </div>
                </div>
                <div>
                    <ul className="mobile-nav mobile-right">
                        <li>
                            <a className="mobile-item" href="#">
                                <i className="user circle icon" />
                            </a>
                        </li>
                        <li>
                            <a className="mobile-item" href="#">
                                <i className="shopping cart icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Responsive>
)

