let products=[];  
let div = document.getElementById('cardBody');
let cartProducts=[];
let printCartList=document.getElementById('printCartList')
let clickCountProduct=0;
let totalSum=0;
let printTotalPrice=document.getElementById('printTotalPrice')


const addProduct = (ev) => {
ev.preventDefault();  //stop the form submitting
let newProduct = {
   productId:Date.now(),
   productName: document.getElementById('productName').value,
   productDescription: document.getElementById('productDescription').value,
   productPrice:Number(document.getElementById("productPrice").value),
   productAvailability:document.getElementById("productAvailability").checked==true,
   productAvailability: productAvailability.checked==true  ? '<small>In stock</small>' : '<small>Out of stock<small>',
  
}
   products.push(newProduct);
   //console.log(products);
   modifyHTML();
   document.querySelector('form').reset();// clear the form for the next entries
}
const modifyHTML = () => {
div.innerHTML="";
products.forEach(function(product,i) { 
div.innerHTML +=  `
<div class="bg-image card shadow-1-strong rounded-2">
<div class="card-body text-white">
  <h4 class="card-title">${product.productName}</h4>
  <p class="card-text"> ${product.productDescription}</p>
<h5>Product price:${product.productPrice}$</h5> 
</div>
<div class="d-flex  d-flex justify-content-center align-items-center">
  <button type="button" id="checkboxID"class="btn btn-primary m-1">${product.productAvailability}</button>
  <button type="button" id="notInStock"class="btn btn-danger m-2"><a onclick="deleteProduct()"><i class="fa fa-trash"></i></a></button>
  <button id="addToCart" type="button"class="btn btn-success"><a onclick="addToCart()"><small>Add to cart</small></a></button>
</div>
</div>
<br />
`
});
};
const deleteProduct=(j) =>  {
products.splice(j,1);
modifyHTML();
};

const addToCart=()=>{ 
        printCartList.innerHTML="";
         cartProducts.push(Object.entries(products).forEach(([i,v])=>{ 
         clickCountProduct=clickCountProduct+1;
          printCartList.innerHTML+=`<h6>Product name:${v.productName}<h2>
                                    <h6>Product price:${v.productPrice}$*${clickCountProduct}<h2>`
         
}
   ))
   
}

/*function totalSum(){
let totalSum=0;
printTotalPrice.innerHTML="";
Object.values(products).forEach(i=>{
totalSum+=perseInt(i.productsPrice[i].printTotalPrice)
})
}*/

document.getElementById("myButton").addEventListener("click",addProduct);