const INITIAL_STATE = {
  itemModal: [
    {
      id: 'modal-01',
      imgSrc: 'fedbid-seller-dashboard.png',
      title: 'FedBid',
      description: 'FedBid Marketplace is full-service online platform where Buyers source products and services and vendors compete and win on a level playing field. Frontend built using handcraft CSS, JQuery and various libraries.',
      category: [
        'White-label', 'Web Design'
      ],
      projectLink: ''
    }, {
      id: 'modal-02',
      imgSrc: 'fedbid-whitelabel-dhs-dashboard.png',
      title: 'FedBid - DHS theme',
      description: 'FedBid with DHS theme. Frontend built using handcraft CSS, JQuery and various libraries.',
      category: [
        'White-label', 'Web Design'
      ],
      projectLink: ''
    }, {
      id: 'modal-03',
      imgSrc: 'fedbid-whitelabel-navy-dashboard.png',
      title: 'FedBid - Navy theme',
      description: 'FedBid with Navy theme. Frontend built using handcraft CSS, JQuery and various libraries.',
      category: [
        'White-label', 'Web Design'
      ],
      projectLink: ''
    }, {
      id: 'modal-04',
      imgSrc: 'fedbid-whitelabel-navy-login.png',
      title: 'FedBid - Navy theme',
      description: 'FedBid with Navy theme. Frontend built using handcraft CSS, JQuery and various libraries.',
      category: [
        'White-label', 'Web Design'
      ],
      projectLink: ''
    }
  ]
};

const fedbidModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fedbidModalReducer;