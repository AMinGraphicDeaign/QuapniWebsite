import React from 'react'

import { MobilePageLayout } from './mobilePageLayout'
import { HiddenMenu } from './hiddenMenu'
import { Slideshow } from './slideshow'
import { Parallax } from './parallax'

import { CardDesign } from './cardDesign'
import { MegaMenuSidebar } from './megaMenuSidebar'

import { compose, withStateHandlers } from 'recompose'
import { Segment, Visibility, Responsive} from 'semantic-ui-react'

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
                            vertical
                            style={{ padding: '0em 0em' }}
                        >
                           {/* 購 物 車   側 邊 欄 */}
                            <MegaMenuSidebar />
                        </Segment>
                    </Responsive>
                    {fixed ? <HiddenMenu /> : null}
                </Visibility>
                <title>Quapni</title>
                <MobilePageLayout />
                
                <Responsive minWidth={900}>
                    {/*           幻 燈 片            */}
                    <Slideshow />

                    {/*          滾 動 視 差          */}
                    <Parallax />

                    {/*        卡 片 式 設 計         */}
                    <CardDesign />
                </Responsive>
            </div>
           
        )
    }
)

