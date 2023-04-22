// Đóng & mở responsive
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}



// Chọn size 

const currentProductSizes = document.querySelectorAll('.size')

currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
            size.style.color = "white";
    });
});


// Thêm, xoá Giỏ Hàng


let carts = document.querySelectorAll('.add');

// Khai báo sản phẩm 

let products = [
    {
        name: 'Women Crocs Baya Platform Sandals',
        price: 55,
        size: ["39", "40", "41", "42"],
        inCart:0
    },
    {
        name: 'Women Crocs Baya Platform',
        price: 75,
        size: ["39", "40", "41", "42"],
        inCart:0
    },
    {
        name: 'Women Crocs Baya Platform Buggy',
        price: 65,
        size: ["39", "40", "41", "42"],
        inCart:0
    },
]


for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    });
}

function cartNumbers() {

    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('cart span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('cart span').textContent = 1;
    }

}
