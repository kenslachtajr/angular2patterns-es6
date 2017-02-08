class BookmarksModel {
  constructor($q) {
    'ngInject';

    this.$q = $q;
    this.bookmarks = [
      {"id":1, "title": "AngularJS", "url": "http://angularjs.org", "category": "some Category1"},
      {"id":2, "title": "AngularJS2", "url": "http://angularjs.org", "category": "some Category2"},
      {"id":3, "title": "AngularJS3", "url": "http://angularjs.org", "category": "some Category3"},
      {"id":4, "title": "AngularJS4", "url": "http://angularjs.org", "category": "some Category4"},
      {"id":5, "title": "AngularJS5", "url": "http://angularjs.org", "category": "some Category5"},
      {"id":6, "title": "AngularJS6", "url": "http://angularjs.org", "category": "some Category6"},
      {"id":7, "title": "AngularJS7", "url": "http://angularjs.org", "category": "some Category7"},
      {"id":8, "title": "AngularJS8", "url": "http://angularjs.org", "category": "some Category8"},
      {"id":9, "title": "AngularJS9", "url": "http://angularjs.org", "category": "some Category9"}
    ];
  }

  getBookmarks() {
    return this.$q.when(this.bookmarks);
  }
}

export default BookmarksModel;
