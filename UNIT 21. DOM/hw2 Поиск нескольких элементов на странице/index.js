function getItemsList() {
    let elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList
}
getItemsList();

function getItemsArray() {
    let elementsArray = Array.from(document.querySelectorAll('.tool'));
    console.dir(elementsArray);
    return elementsArray;
}
getItemsArray();
