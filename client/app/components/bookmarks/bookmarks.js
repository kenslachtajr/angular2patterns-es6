import angular from 'angular';
import bookmarksComponent from './bookmarks.component';
import SaveBookmarkModule from './save-bookmark/save-bookmark';

const BookmarksModule = angular.module('bookmarks', [])
  .component('bookmarks', bookmarksComponent);

export default BookmarksModule;
