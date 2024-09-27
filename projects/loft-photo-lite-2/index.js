import pages from './pages';
import model from '../loft-photo-lite-1/model';
import('./style.css');

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
    const pageName = model.getRandomElement(pageNames);
    pages.openPage(pageName);
});