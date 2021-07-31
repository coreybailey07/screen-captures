import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectB2BuyItem } from '../../redux/b2buy/b2buy.selector';
import B2BuyModal from './b2buy-modal.component';

import './portfolio.style.scss';

const B2Buy = ({ b2buy, b2buyPath }) => (

  <section id='b2buy' className='s-b2buy target-section'>

    <div className='row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list'>
      {b2buy.map((b2buy, i) => (
        <div key={i} className='column folio-item'>
          <a href={b2buy.href} className='folio-item__thumb'>
            {b2buy.img.map((img, j) => (
              <img key={j}
                src={`${b2buyPath}${img.src}`}
                srcSet={`${b2buyPath}${img.srcSet1}, ${b2buyPath}${img.srcSet2}`}
                alt={img.alt}
              />
            ))}
          </a>
        </div>
      ))}
    </div>

    <B2BuyModal b2buyPath={`${b2buyPath}`} />

  </section>

)

const mapStateToProps = createStructuredSelector({
  b2buy: selectB2BuyItem
})

export default connect(mapStateToProps)(B2Buy);