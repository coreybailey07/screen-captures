const INITIAL_STATE = {
  itemModal: [
    {
      id: 'modal-01',
      imgSrc: 'vao-inquiry.png',
      title: 'VAO Desktop',
      description: 'This screen capture shows the VAO workflow. Built using bootstrap 3, Fontawesome 4 and LessCSS',
      category: [
        'Web Design', 'E-Commerce'
      ],
      projectLink: ''
    }, {
      id: 'modal-02',
      imgSrc: 'vao-protest.png',
      title: 'VAO Mobile',
      description: 'VAo detail. Built using bootstrap 3, Fontawesome 4 and LessCSS',
      category: [
        'Mobile Design', 'E-Commerce'
      ],
      projectLink: ''
    }
  ]
};

const vaoModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default vaoModalReducer;