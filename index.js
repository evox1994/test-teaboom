// Можно это перенести в дата атрибуты
const productInfo = {
  100: {
    price: '326,40',
    oldPrice: '349,20',
    sku: '01306',
  },
  500: {
    price: '1 432',
    oldPrice: '1 646',
    sku: '01307',
  },
  1000: {
    price: '2 064',
    oldPrice: '2 592',
    sku: '01308',
  },
  5000: {
    price: '8 710',
    oldPrice: '6 320',
    sku: '01309',
  },
};

const switchPackaging = (element) => {
  const packaging = element.dataset.value;
  const content = productInfo[packaging];
  document.querySelectorAll('.card-switch-item').forEach((el) => el.classList.remove('selected'));
  element.classList.add('selected');
  document.querySelector('.card-sku').textContent = `арт: ${content.sku}`;
  document.querySelector('.card-packaging').textContent = `${packaging} г`;
  const oldPriceelement = document.querySelector('.card-price-old');
  if (content.oldPrice) {
    oldPriceelement.classList.remove('hide');
    oldPriceelement.textContent = `${content.oldPrice} ₽`;
  } else {
    oldPriceelement.classList.add('hide');
  }
  document.querySelector('.card-price-new').textContent = `${content.price} ₽`;
};

const handleClickSwitch = (e) => {
  const element = e.target;
  switchPackaging(element);
};

document.querySelectorAll('.card-switch-item').forEach((elem) => elem.addEventListener('click', handleClickSwitch));

(() => {
  const element = document.querySelector('.card-switch-item');
  switchPackaging(element);
})();
