// Search Functionality for Products Page
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const products = document.querySelectorAll(".product-card");

  searchBar.addEventListener("keyup", (e) => {
    const searchText = e.target.value.toLowerCase();
    products.forEach(product => {
      const text = product.innerText.toLowerCase();
      product.style.display = text.includes(searchText) ? "flex" : "none";
    });
  });
});