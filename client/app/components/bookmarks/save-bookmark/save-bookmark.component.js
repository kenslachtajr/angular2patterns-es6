import template from './save-bookmark.html';
import './save-bookmark.style';

const saveBookmarkComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },
  template,
  controllerAs: 'saveBookmarkCtrl'
};

export default saveBookmarkComponent;
