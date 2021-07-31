import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectVAOItem } from '../../redux/vao/vao.selector';
import VAOModal from './vao-modal.component';

import './portfolio.style.scss';

const VAO = ({ vao, vaoPath }) => (

  <section id='vao' className='s-vao target-section'>

    <div className='row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list'>
      {vao.map((vao, i) => (
        <div key={i} className='column folio-item'>
          <a href={vao.href} className='folio-item__thumb'>
            {vao.img.map((img, j) => (
              <img key={j}
                src={`${vaoPath}${img.src}`}
                srcSet={`${vaoPath}${img.srcSet1}, ${vaoPath}${img.srcSet2}`}
                alt={img.alt}
              />
            ))}
          </a>
        </div>
      ))}
    </div>

    <VAOModal vaoPath={`${vaoPath}`} />

  </section>

)

const mapStateToProps = createStructuredSelector({
  vao: selectVAOItem
})

export default connect(mapStateToProps)(VAO);