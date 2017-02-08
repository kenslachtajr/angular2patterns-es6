import { uniqueID, findIndex, remove } from 'lodash';

class BookmarksModel {
  constructor($q) {
    'ngInject';

    this.$q = $q;
    this.bookmarks = [
      {"id":1, "title": "AngularJS1", "url": "http://angularjs.org", "category": "Development"},
      {"id":2, "title": "AngularJS2", "url": "http://angularjs.org", "category": "Design"},
      {"id":3, "title": "AngularJS3", "url": "http://angularjs.org", "category": "Exercise"},
      {"id":4, "title": "AngularJS4", "url": "http://angularjs.org", "category": "Humor"},
      {"id":5, "title": "AngularJS5", "url": "http://angularjs.org", "category": "Development"},
      {"id":6, "title": "AngularJS6", "url": "http://angularjs.org", "category": "Design"},
      {"id":7, "title": "AngularJS7", "url": "http://angularjs.org", "category": "Exercise"},
      {"id":8, "title": "AngularJS8", "url": "http://angularjs.org", "category": "Humor"}
    ];
  }

  getBookmarks() {
    return this.$q.when(this.bookmarks);
  }

  createBookmark(bookmark) {
    bookmark.id = uniqueID();
    this.bookmarks.push(bookmark);
  }

  updateBookmark(bookmark) {
    const index = findIndex(this.bookmarks, b => b.id === bookmark.id);
    this.bookmarks[index] = bookmark;
  }

  deleteBookmark(bookmark) {
    remove(this.bookmarks, b => b.id === bookmark.id);
  }
}

export default BookmarksModel;
