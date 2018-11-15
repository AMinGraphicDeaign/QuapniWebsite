import React from 'react'

import quapni_logo from '../../home/images/quapni_logo.svg'
import cal_85th_gd_2 from '../../home/images/cal_85th_gd_2.jpg'
import { Container } from 'semantic-ui-react'

import '../css/brandPage.css'

export const Brand = () => (
  <div>
    <title>品牌故事 - Quapni</title>
    <Container>
      <img className="logo-style" alt="quapni_logo" src={quapni_logo} />
      <h1 className="slogan-style">突破 創新 舒適 精緻簡約</h1>
      <p className="Paragraph-style">
        提供所有愛好大自然有更好更健康的生活方式，<br />
        而堅持研發舒適及創新觀感的產品。<br />
        突破現有的設計與生產技術，<br />
        以滿足操控性與使用性的最高境界。
      </p>
    </Container>
    <div className="box">
      <img src={cal_85th_gd_2} />
    </div>

  </div>
)