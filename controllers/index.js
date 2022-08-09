// Call API

function getProductList() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET"
  });
  // Success
  promise.then(function (result) {
    renderProductList(result.data.content,'product-list');
  });
}

function renderProductList(arrProduct, idBody) {
  let htmlContent = "";

  for (let index = 0; index < arrProduct.length; index++) {
    let product = arrProduct[index];
    htmlContent += `
            <div class="col">
                <div class="item">
                    <div class="top">
                        <img src="${product.image}" alt="..." />
                        <h4>${product.name}</h4>
                        <p>${product.shortDescription}</p>
                    </div>
                    <div class="bottom">
                        <a href="#" class="btn-buy" type="button">Buy now</a>
                        <a class="btn-price" type="button">$${product.price}</a>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById(idBody).innerHTML = htmlContent;
  }
}

window.onload = function () {
  getProductList();
};
