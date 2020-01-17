import foodItem from '../templates/food-item.hbs';
import menu from '../menu';
import refs from './refs';

const buildMarkup = items => {
  const markup = items.map(item => foodItem(item)).join('');

  refs.foodMenu.insertAdjacentHTML('beforeend', markup);
};

buildMarkup(menu);
