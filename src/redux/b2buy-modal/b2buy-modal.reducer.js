const INITIAL_STATE = {
  itemModal: [
    {
      id: 'modal-01',
      imgSrc: 'b2buy-desktop_1.png',
      title: 'B2Buy Desktop',
      description: 'This screen capture shows the B2Buy workflow. It provided users an overview of the buying/selling process on the platform. A small call to action is present with popular categories offered as a suggestion. Built using bootstrap 3, Fontawesome 4 and LessCSS',
      category: [
        'Web Design', 'E-Commerce'
      ],
      projectLink: ''
    }, {
      id: 'modal-02',
      imgSrc: 'b2buy-mobile_1.png',
      title: 'B2Buy Mobile',
      description: 'This is the mobile view of the previous screen capture. Built using bootstrap 3, Fontawesome 4 and LessCSS',
      category: [
        'Mobile Design', 'E-Commerce'
      ],
      projectLink: ''
    }, {
      id: 'modal-03',
      imgSrc: 'b2buy-desktop_2.png',
      title: 'B2Buy',
      description: 'Sellers receive qoutes for services. The platform brought together various buyers in an attempt to beat quoted offers. Built using bootstrap 3, Fontawesome 4 and LessCSS',
      category: [
        'Web Design', 'E-Commerce'
      ],
      projectLink: ''
    }, {
      id: 'modal-04',
      imgSrc: 'b2buy-mobile_2.png',
      title: 'B2Buy Mobile',
      description: 'This is the mobile view of the previous screen capture. Built using bootstrap 3, Fontawesome 4 and LessCSS',
      category: [
        'Mobile Design', 'E-Commerce'
      ],
      projectLink: ''
    }, {
      id: 'modal-05',
      imgSrc: 'b2buy-home.png',
      title: 'B2Buy',
      description: 'B2Buy and FundsFlo were 2 products designed for commercial buyers/sellers. FedBid Marketplace was designed for the Federal market. Built using bootstrap 3, Fontawesome 4 and LessCSS',
      category: [
        'Web Design', 'E-Commerce'
      ],
      projectLink: ''
    }
  ]
};

const b2buyModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default b2buyModalReducer;