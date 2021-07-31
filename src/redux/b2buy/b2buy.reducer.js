const INITIAL_STATE = {
  item: [
    {
      href: '#modal-01',
      img: [{
        src: 'b2buy-desktop_1.png',
        srcSet1: 'b2buy-desktop_1.png 1x',
        srcSet2: 'b2buy-desktop_1@2x.png 2x',
        alt: 'Desktop'
      }]
    },
    {
      href: '#modal-02',
      img: [{
        src: 'b2buy-mobile_1.png',
        srcSet1: 'b2buy-mobile_1.png 1x',
        srcSet2: 'b2buy-mobile_1@2x.png 2x',
        alt: 'mobile'
      }]
    },
    {
      href: '#modal-03',
      img: [{
        src: 'b2buy-desktop_2.png',
        srcSet1: 'b2buy-desktop_2.png 1x',
        srcSet2: 'b2buy-desktop_2@2x.png 2x',
        alt: 'Desktop 2'
      }]
    },
    {
      href: '#modal-04',
      img: [{
        src: 'b2buy-mobile_2.png',
        srcSet1: 'b2buy-mobile_2.png 1x',
        srcSet2: 'b2buy-mobile_2@2x.png 2x',
        alt: 'mobile 2'
      }]
    },
    {
      href: '#modal-05',
      img: [{
        src: 'b2buy-home.png',
        srcSet1: 'b2buy-home.png 1x',
        srcSet2: 'b2buy-home@2x.png 2x',
        alt: 'Home'
      }]
    }
  ]
};

const b2buyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default b2buyReducer;