const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector('.gallery');
galleryList.style.cssText = 'display: flex; gap: 50px; list-style: none; align-items: center; justify-content: center; align-items: baseline;'
const galeryCard = ({url, alt} = {}) => {
 return `<li><img src="${url}" alt="${alt}" width='300'></li>`
};
const galleryCards = images.map(el => 
  galeryCard(el));
galleryList.insertAdjacentHTML("beforeend", galleryCards.join(""));
console.log(galleryList);