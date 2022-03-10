const usePrompt = () => {
    const myNumber = prompt('Enter a number: ');
    console.log(myNumber);
    const sum = parseInt(myNumber) + 100;
    alert('Your number sum is: ' + sum);
}
const useConfirm = () => {
    const giveDecision = confirm('Do you want to see our web address?');
    console.log(giveDecision);
    if (giveDecision) alert('Our web adress is: ' + location.href);
}

//add product 
const addProduct = () => {
    const productNameValue = document.getElementById('product-name');
    const productPriceValue = document.getElementById('product-price');
    const productName = productNameValue.value;
    const productPrice = productPriceValue.value;
    productNameValue.value = '';
    productPriceValue.value = '';
    if (!productName || !productPrice) return;
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerHTML = `
    ${productName} ----> ${productPrice}
    `;
    ul.appendChild(li);

}