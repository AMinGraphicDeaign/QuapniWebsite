import React from 'react'

import {
    Responsive,
    Segment,
} from 'semantic-ui-react'

import { Slideshow } from './slideshow'
import { Parallax } from './parallax'
import { CardDesign } from './cardDesign'
import { MobileHeroImageTitle } from './mobileHeroImageTitle'

import '../css/heroImage.css'

export const MobilePageLayout  = () => (  
   
            <Responsive maxWidth={900}>
                <Segment
                    textAlign='center'
                    // Hero Image 圖 片 放 置 css ↓↓↓
                    className="hero-image-mobile"
                    vertical
                >
                    <MobileHeroImageTitle />

                </Segment>
                {/*           幻 燈 片            */}
                <Slideshow />

                {/*          滾 動 視 差          */}
                <Parallax />

                {/*        卡 片 式 設 計         */}
                <CardDesign />
            </Responsive>
        )


