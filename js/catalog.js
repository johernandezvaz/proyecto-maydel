document.addEventListener('DOMContentLoaded', () => {
    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy1.PNG'
        },
        {
            id: 2,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy2.PNG'
        },
        {
            id: 3,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy3.PNG'
        },
        {
            id: 4,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy4.PNG'
        },
        {
            id: 5,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy5.PNG'
        },
        {
            id: 6,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy6.PNG'
        },
        {
            id: 7,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy7.PNG'
        },
        {
            id: 8,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy8.PNG'
        },
        {
            id: 9,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy9.PNG'
        },
        {
            id: 10,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy10.PNG'
        },
        {
            id: 11,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy11.PNG'
        },
        {
            id: 12,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy12.PNG'
        },
        {
            id: 13,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy13.PNG'
        },
        {
            id: 14,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy14.PNG'
        },
        {
            id: 15,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy15.PNG'
        },
        {
            id: 16,
            name: 'Faja stagmy',
            category: 'Fajas stagmy',
            price: 59.99,
            image: '../img catálogo stagmy/stagmy16.PNG'
        },
        
    ];

    const productsGrid = document.querySelector('.products-grid');

    // Render products
    function renderProducts(products) {
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">€${product.price.toFixed(2)}</div>
                </div>
            </div>
        `).join('');
    }

    // Initialize with all products
    renderProducts(products);

    // Filter functionality
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Implement filter logic here
            console.log('Filter changed:', checkbox.name, checkbox.value, checkbox.checked);
        });
    });

    // Price range functionality
    const priceSlider = document.querySelector('.price-slider');
    const minPriceInput = document.querySelector('.price-inputs input:first-child');
    const maxPriceInput = document.querySelector('.price-inputs input:last-child');

    priceSlider?.addEventListener('input', (e) => {
        const value = e.target.value;
        maxPriceInput.value = value;
        // Implement price filter logic here
    });

    // Sort functionality
    const sortSelect = document.querySelector('.sort-select');
    sortSelect?.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        // Implement sort logic here
        console.log('Sort by:', sortBy);
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    let searchTimeout;

    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            renderProducts(filteredProducts);
        }, 300);
    });

    // Pagination functionality
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    paginationNumbers.forEach(button => {
        button.addEventListener('click', () => {
            paginationNumbers.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Implement pagination logic here
            console.log('Page:', button.textContent);
        });
    });

    // Clear all filters
    const clearFiltersBtn = document.querySelector('.clear-filters');
    clearFiltersBtn?.addEventListener('click', () => {
        filterCheckboxes.forEach(checkbox => checkbox.checked = false);
        priceSlider.value = 200;
        minPriceInput.value = 0;
        maxPriceInput.value = 200;
        searchInput.value = '';
        renderProducts(products);
    });
});