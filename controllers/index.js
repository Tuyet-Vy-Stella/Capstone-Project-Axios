// Call API

function getProductList() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET"
  });
  // Success
  promise.then(function (result) {
    renderProductList(result.data.content, "product-list");
    renderCarousel(
      result.data.content,
      "carousel-inner",
      "carousel-indicators"
    );
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
                        <a href="./view/detail.html?productid=${product.id}" class="btn-buy" type="button">Buy now</a>
                        <a class="btn-price" type="button">$${product.price}</a>
                    </div>
                </div>
            </div>
        `;
        
    document.getElementById(idBody).innerHTML = htmlContent;
  }
}

function renderCarousel(arrShoes, idBodyCarousel, idBodyIndicators) {
  let htmlContent = "";
  let htmlContentIndicators = "";
  for (let index = 0; index < arrShoes.length; index++) {
    let Shoe = arrShoes[index];
    if (Shoe === arrShoes[0]) {
      htmlContent += `
          <div class="carousel-item active">
              <div class="carousel-container  d-flex justify-content-around align-items-center">
                  <div class="rendertable-item-inner d-flex align-items-center">
                      <div class="carousel-product">
                          <img class="overlay-image" src="${Shoe.image}" alt="...">
                      </div>
                      <div class="carousel-infoProduct">
                          <div class="infoProduct">
                              <h1>${Shoe.name}</h1>
                              <span>${Shoe.shortDescription}</span>
                              <div class="button">
                                <a href="./view/detail.html?productid=${Shoe.id}" class="btn-buyNow">Buy now</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
      htmlContentIndicators += `<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          `;
    } else {
      htmlContent += `
          <div class="carousel-item ">
              <div class="carousel-container  d-flex justify-content-around align-items-center">
                  <div class="rendertable-item-inner d-flex align-items-center">
                      <div class="carousel-product">
                          <img class="overlay-image" src="${Shoe.image}" alt="...">
                      </div>
                      <div class="carousel-infoProduct">
                          <div class="infoProduct">
                              <h1>${Shoe.name}</h1>
                              <span>${Shoe.shortDescription}</span>
                              <div class="button">
                                <a href="./view/detail.html?productid=${Shoe.id}" class="btn-buyNow">Buy now</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
      htmlContentIndicators += `<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="${index}" aria-label="Slide ${
        index + 1
      }"></button>
          `;
    }
  }
  document.getElementById(idBodyCarousel).innerHTML = htmlContent;
  document.getElementById(idBodyIndicators).innerHTML = htmlContentIndicators;
}

//myparam

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("productid");

// Call API
function DetailProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
    method: "GET"
  });

  promise.then(function (result) {
    renderDetail(result.data.content, "detailProduct");
  });
}

function renderDetail(shoes, idBodyDetail) {
  let htmlContentDetail = `
    <div class="productdetail-content">
        <div class="row">
            <div class="productdetail-Left col-4">
                <div class="productdetail-Left-img">
                    <img src="${shoes.image}" alt="...">
                </div>
            </div>
            <div class="productdetail-Right col-8 ">
                <div class="productdetail-Right-name">
                    <h4>${shoes.name}</h4>
                    <p>${shoes.description}</p>
                </div>
                <div class="productdetail-Right-size">
                    <h5>Available size</h5>
                    <p id= "btn-size"></p>
                </div>
                <div class="productdetail-Right-price">
                    <p>${shoes.price}$</p>
                </div>
                <div class="productdetail-Right-amount">
   <button class="btnamound"> + </button><span class="amount-number">1</span><button class="btnamoundright"> - </button>
                </div>
                <button class="btn-addtocart"><p>Add to cart</p></button>
            </div>
        </div>
    </div>
`;
  document.getElementById(idBodyDetail).innerHTML = htmlContentDetail;

  console.log(shoes.size);
  let htmlSize = "";
  for (let index = 0; index < shoes.size.length; index++) {
    htmlSize += `
      <button class="text-dark"><span>${shoes.size[index]}</span></button>
      `;
  }

  document.getElementById("btn-size").innerHTML = htmlSize;
}

window.onload = function () {
  getProductList();
};
