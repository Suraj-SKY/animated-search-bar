const searchBarContainerElement = document.querySelector('.search-bar-container');
const magnifierElement = document.querySelector('.magnifier');

magnifierElement.addEventListener('click', (event) => {
    searchBarContainerElement.classList.toggle('active');
});