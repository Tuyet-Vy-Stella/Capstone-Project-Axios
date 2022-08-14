// import '../util/backtotop'

function getProduct(){

    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    });

    promise.then(function(result){
        renderProduct(result.data.content,'tableRender');
    })
}

 function renderProduct (arrFrame,idBody){
    var htmlContent = '';
    for (var index = 0; index < arrFrame.length; index ++) {
        var frame = arrFrame[index];
        // console.log(frame)

        htmlContent += `
        <div class="frame m-4">
            <div class="frame-item">
                <div class="frame-item-top">
                    <img class="frameimg"src="${frame.image}" alt="...">
                    <h4>${frame.name}</h4>
                    <p>${frame.shortDescription}</p>
                </div>
                <div class="frame-item-bottom">
                    <a href="./detail.html?productid=${frame.id}" class="btbuy" onclick="buyframe('${frame.id}')" type="button">Buy now</a>
                    <a class="btprice" type="button">${frame.price}$</a>
                </div>
            </div>
        </div>
        `
    }

    document.getElementById(idBody).innerHTML = htmlContent;
}


//myparam

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
   
function DetailProduct(){

    let promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + myParam,
        method:'GET',
    });

    promise.then(function(result){
     

        renderDetail(result.data.content,'detailProduct');
    })
}

function renderDetail (shoes,idBodyDetail){ 
    
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
    `
    document.getElementById(idBodyDetail).innerHTML = htmlContentDetail;

   
  console.log(shoes.size);
  let htmlSize = '';
      for(let index = 0; index < shoes.size.length; index ++){
          // <button class="btn btn-dark text-white"></button>
          htmlSize += `
          <button class="text-dark"><span>${shoes.size[index]}</span></button>
          `
      }

  document.getElementById('btn-size').innerHTML = htmlSize;
    }


window.onload = function (){
    getProduct();
    DetailProduct();
 }

 