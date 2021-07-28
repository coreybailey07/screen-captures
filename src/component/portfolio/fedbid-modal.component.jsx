import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFedBidModalItem } from '../../redux/fedbid-modal/fedbid-modal.selector';

import './portfolio.style.scss';

const FedBidModal = ({ fedbidModal, fedbidPath }) => (

  fedbidModal.map((modal, i) => (
    <div key={i} id={modal.id} hidden>
      <div className='modal-popup'>
        <img src={`${fedbidPath}gallery/g-${modal.imgSrc}`} alt={modal.title} />
        <div className='modal-popup__desc'>
          <h5>{modal.title}</h5>
          <p>{modal.description}</p>
          <ul className='modal-popup__cat'>
            {modal.category.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>
        </div>
        {modal.projectLink.length > 0 ? (<a href={modal.projectLink} className='modal-popup__details'>Project link</a>) : ('')}
      </div>
    </div>
  ))

)

const mapStateToProps = createStructuredSelector({
  fedbidModal: selectFedBidModalItem
})

export default connect(mapStateToProps)(FedBidModal);