import React from 'react'

import { HeroImageTitle } from './heroImageTitle'
import { MobilePageLayout } from './mobilePageLayout'
import { HiddenMenu } from './hiddenMenu'
import { MegaMenu } from './megaMenu'
import { Slideshow } from './slideshow'
import { Parallax } from './parallax'
import { Footer } from './footer'
import { CardDesign } from './cardDesign'

import { compose, withStateHandlers } from 'recompose'
import { Segment, Visibility,Responsive } from 'semantic-ui-react'
import '../css/heroImage.css'

export const Home = compose(
    withStateHandlers({ fixed: null }, {
        hideFixedMenu: () => () => ({ fixed: false }),
        showFixedMenu: () => () => ({ fixed: true })
    })
)(
    ({ fixed, hideFixedMenu, showFixedMenu }) => {
        console.log(fixed)
        return (
            /*Page Contents*/
            <div>
                <Visibility
                    once={false}
                    onBottomPassed={showFixedMenu}
                    onBottomPassedReverse={hideFixedMenu}
                >
                   <Responsive minWidth={900}>
                    <Segment
                        textAlign='center'
                        // Hero Image 圖 片 放 置 css ↓↓↓
                        className="masthead segment"
                        vertical
                    >
                        <MegaMenu />
                        <HeroImageTitle />
                    </Segment>
                    </Responsive>
                    {fixed ? <HiddenMenu /> : null}
                </Visibility>

                <MobilePageLayout/>

                <Responsive minWidth={900}>
                    {/*           幻 燈 片            */}
                    <Slideshow />

                    {/*          滾 動 視 差          */}
                    <Parallax />

                    {/*        卡 片 式 設 計         */}
                    <CardDesign />

                    {/*        底 層 導 覽 列         */}
                    <Footer />
                </Responsive> 
            </div>
        )
    }
)


