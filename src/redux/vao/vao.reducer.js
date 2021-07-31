const INITIAL_STATE = {
  item: [
    {
      href: '#modal-01',
      img: [{
        src: 'vao-inquiry.png',
        srcSet1: 'vao-inquiry.png 1x',
        srcSet2: 'vao-inquiry@2x.png 2x',
        alt: 'Desktop'
      }]
    },
    {
      href: '#modal-02',
      img: [{
        src: 'vao-protest.png',
        srcSet1: 'vao-protest.png 1x',
        srcSet2: 'vao-protest@2x.png 2x',
        alt: 'mobile'
      }]
    } 
  ]
};

const vaoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default vaoReducer;