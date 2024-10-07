const drinks = [
    { name: "Whiskey", icon: "🥃" },
    { name: "Wine", icon: "🍷" },
    { name: "Gin", icon: "🍸" },
    { name: "Beer", icon: "🍺" },
    { name: "Vodka", icon: "🍶" },
    { name: "Rum", icon: "🥛" },
    { name: "Tequila", icon: "🥴" },
    { name: "Brandy", icon: "🍾" },
    { name: "Liqueur", icon: "🍸" },
    { name: "Champagne", icon: "🍾" },
    { name: "Absinthe", icon: "🧪" },
    { name: "Sake", icon: "🍶" },
];

const food = [
    { name: "Pizza", icon: "🍕" },
    { name: "Burger", icon: "🍔" },
    { name: "Fries", icon: "🍟" },
    { name: "Hot Dog", icon: "🌭" },
    { name: "Taco", icon: "🌮" },
    { name: "Burrito", icon: "🌯" },
    { name: "Sushi", icon: "🍣" },
    { name: "Pasta", icon: "🍝" },
    { name: "Salad", icon: "🥗" },
    { name: "Popcorn", icon: "🍿" },
    { name: "Ice Cream", icon: "🍦" },
    { name: "Donut", icon: "🍩" },
];

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    
    const iconElement = document.createElement('div');
    iconElement.className = 'product-icon';
    iconElement.textContent = product.icon;
    
    const nameElement = document.createElement('span');
    nameElement.className = 'product-name';
    nameElement.textContent = product.name;
    
    productElement.appendChild(iconElement);
    productElement.appendChild(nameElement);
    
    return productElement;
}

function populateProductGrid(products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        const productElement = createProductElement(product);
        productGrid.appendChild(productElement);
    });
}

function setupTabSwitching() {
    const [drinksTab, foodTab] = document.querySelectorAll('nav button');
    
    drinksTab.addEventListener('click', () => {
        drinksTab.classList.add('active');
        foodTab.classList.remove('active');
        populateProductGrid(drinks);
    });
    
    foodTab.addEventListener('click', () => {
        foodTab.classList.add('active');
        drinksTab.classList.remove('active');
        populateProductGrid(food);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateProductGrid(drinks); // Initially populate with drinks
    setupTabSwitching();
});