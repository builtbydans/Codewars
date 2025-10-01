class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    } else if (pageIndex === this.pageCount() - 1) {
      return this.collection.length % this.itemsPerPage === 0
        ? this.itemsPerPage
        : this.collection.length % this.itemsPerPage;
    } else {
      return this.itemsPerPage;
    }
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    } else {
      return Math.floor(itemIndex / this.itemsPerPage);
    }
  }
}

const helper1 = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
const helper2 = new PaginationHelper(
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  3
);

console.log(helper1.collection);
console.log(helper1.itemsPerPage);
console.log(helper1.itemCount());
console.log(helper1.pageCount());
console.log(helper1.pageItemCount(2));
console.log(helper2.pageItemCount(3)); // 1
console.log(helper1.pageIndex(5)); // should == 1 (zero based index)
console.log(helper1.pageIndex(2)); // should == 0
console.log(helper1.pageIndex(20)); // should == -1
console.log(helper1.pageIndex(-10)); // should == -1
