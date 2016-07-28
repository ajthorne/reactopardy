import CategoryModel from './models/categorymodel';
import Categories from './collections/categories';

let store = {
  category: new CategoryModel(),
  //access using store.category

  categoriesCollection: new Categories()
  //access using store.categoriesCollection

}

export default store;
