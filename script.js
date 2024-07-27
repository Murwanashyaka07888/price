document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("productForm");
    const productList = document.getElementById("productList");

    productForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const productId = document.getElementById("productId").value;
        const amount = document.getElementById("amount").value;
        const taxRate = document.getElementById("taxRate").value;
        const priceType = document.getElementById("priceType").value;
        const patternId = document.getElementById("patternId").value;
        const price = document.getElementById("price").value;

        const product = {
            productId,
            amount,
            taxRate,
            priceType,
            patternId,
            price
        };

        addProductToList(product);
        productForm.reset();
    });

    function addProductToList(product) {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <p><strong>Product ID:</strong> ${product.productId}</p>
            <p><strong>Amount:</strong> ${product.amount}</p>
            <p><strong>Tax Rate:</strong> ${product.taxRate}%</p>
            <p><strong>Price Type:</strong> ${product.priceType}</p>
            <p><strong>Pattern ID:</strong> ${product.patternId}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <button onclick="removeProduct(this)">Remove</button>
        `;
        productList.appendChild(productDiv);
    }
});

function removeProduct(button) {
    button.parentElement.remove();
}
