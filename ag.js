// script.js
const data = [
    { sponsor: 'Sponsor 1', item: 'Item 1', definition: 'Definition of Item 1' },
    { sponsor: 'Sponsor 2', item: 'Item 2', definition: 'Definition of Item 2' },
    { sponsor: 'Sponsor 3', item: 'Item 3', definition: 'Definition of Item 3' },
    { sponsor: 'Sponsor 4', item: 'Item 4', definition: 'Definition of Item 4' },
    { sponsor: 'Sponsor 5', item: 'Item 5', definition: 'Definition of Item 5' }
];

function updateColumns(rowIndex) {
    document.getElementById(`item-${rowIndex}`).innerText = data[rowIndex].item;
    document.getElementById(`def-${rowIndex}`).innerText = data[rowIndex].definition;
}
