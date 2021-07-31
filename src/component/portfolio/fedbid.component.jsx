import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFedBidItem } from '../../redux/fedbid/fedbid.selector';
import FedBidModal from './fedbid-modal.component';

import './portfolio.style.scss';

const FedBid = ({ fedbid, fedbidPath }) => (

  <section id='fedbid' className='s-fedbid target-section'>

    <div className='row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list'>
      {fedbid.map((fedbid, i) => (
        <div key={i} className='column folio-item'>
          <a href={fedbid.href} className='folio-item__thumb'>
            {fedbid.img.map((img, j) => (
              <img key={j}
                src={`${fedbidPath}${img.src}`}
                srcSet={`${fedbidPath}${img.srcSet1}, ${fedbidPath}${img.srcSet2}`}
                alt={img.alt}
              />
            ))}
          </a>
        </div>
      ))}
    </div>

    <FedBidModal fedbidPath={`${fedbidPath}`} />

  </section>

)

const mapStateToProps = createStructuredSelector({
  fedbid: selectFedBidItem
})

export default connect(mapStateToProps)(FedBid);