import CategoryModel from './models/categorymodel';
import Categories from './collections/categories';
import Session from './models/session';

let store = {
  category: new CategoryModel(),
  //access using store.category

  categoriesCollection: new Categories(),
  //access using store.categoriesCollection

  session: new Session()
  //access using store.session

}

export default store;
