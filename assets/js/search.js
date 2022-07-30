const searchButton = document.querySelector('.cabecera__lupa');
const inputSearch = document.querySelector('.cabecera__input');

const searchProduct = () => {
    if(inputSearch.value){
        window.location.href = `search.html?search=${inputSearch.value}`;
    }
}

searchButton.addEventListener('click', searchProduct);
inputSearch.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        searchProduct();
    }
});