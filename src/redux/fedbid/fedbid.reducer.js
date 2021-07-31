const INITIAL_STATE = {
  item: [
    {
      href: '#modal-01',
      img: [{
        src: 'fedbid-seller-dashboard.png',
        srcSet1: 'fedbid-seller-dashboard.png 1x',
        srcSet2: 'fedbid-seller-dashboard@2x.png 2x',
        alt: 'Bid Details'
      }]
    },
    {
      href: '#modal-02',
      img: [{
        src: 'fedbid-whitelabel-dhs-dashboard.png',
        srcSet1: 'fedbid-whitelabel-dhs-dashboard.png 1x',
        srcSet2: 'fedbid-whitelabel-dhs-dashboard@2x.png 2x',
        alt: 'Rucksack'
      }]
    },
    {
      href: '#modal-03',
      img: [{
        src: 'fedbid-whitelabel-navy-dashboard.png',
        srcSet1: 'sfedbid-whitelabel-navy-dashboard.png 1x',
        srcSet2: 'fedbid-whitelabel-navy-dashboard@2x.png 2x',
        alt: 'Sanddunes'
      }]
    },
    {
      href: '#modal-04',
      img: [{
        src: 'fedbid-whitelabel-navy-login.png',
        srcSet1: 'fedbid-whitelabel-navy-login.png 1x',
        srcSet2: 'fedbid-whitelabel-navy-login@2x.png 2x',
        alt: 'Sanddunes'
      }]
    }
  ]
};

const portfolioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default portfolioReducer;