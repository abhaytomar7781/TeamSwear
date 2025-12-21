let cartCount = 0;

function addToCart(product) {
  cartCount++;
  document.getElementById("count").innerText = cartCount;
}

// Scroll to products
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

const productsContainer = document.getElementById("products");

// MORE PRODUCTS (added by me)
const productData = [
  { img: "classic.avif", name: "Classic T-Shirt", price: "₹1199.00" },
  { img: "Denim jacket.webp", name: "Denim Jacket", price: "₹2199.00" },
  { img: "Hoodie.jpg", name: "Comfort Hoodie", price: "₹2599.00" },
  { img: "Baggy.jpg", name: "Cargo Pants", price: "₹2359.00" },
  { img: "sweatshirt.webp", name: "Oversized Sweatshirt", price: "₹1899.00" },
  { img: "jogger.jpg", name: "Street Joggers", price: "₹1999.00" },
  { img: "shirt.png", name: "Casual Shirt", price: "₹1699.00" },
  { img: "shorts.jpg", name: "Summer Shorts", price: "₹1299.00" }
];

let index = 0;

// CREATE PRODUCT CARD
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;

  return card;
}

// LOAD PRODUCTS
function loadMoreProducts() {
  for (let i = 0; i < 6; i++) {
    productsContainer.appendChild(
      createProductCard(productData[index % productData.length])
    );
    index++;
  }
}

// FORCE SCROLLABLE PAGE (IMPORTANT)
loadMoreProducts();
loadMoreProducts();

// INFINITE SCROLL LISTENER
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 50
  ) {
    loadMoreProducts();
  }
});




