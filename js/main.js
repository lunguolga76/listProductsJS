let products=[];  
let div = document.getElementById('cardBody');
let cartProducts=[];
let printCartList=document.getElementById('printCartList')
let clickCountProduct=0;
let grandTotal=0;
let printTotalPrice=document.getElementById('printTotalPrice')


const addProduct = (ev) => {
ev.preventDefault();  //stop the form submitting
let newProduct = {
   productId:Date.now(),
   productName: document.getElementById('productName').value,
   productDescription: document.getElementById('productDescription').value,
   productPrice:Number(document.getElementById("productPrice").value),
   productAvailability:document.getElementById("productAvailability").checked==true,
   productAvailability: productAvailability.checked==true  ? 'In stock' : 'Out of stock',

  
}
   products.push(newProduct);
   //console.log(products);
   modifyHTML();
   document.querySelector('form').reset();// clear the form for the next entries
}
const modifyHTML = () => {
div.innerHTML="";
Object.entries(products).forEach(([i,product])=> {
   //console.log(products);
div.innerHTML +=  `
<div class="bg-image card shadow-1-strong rounded-2">
<div class="card-body text-white">
  <h4 class="card-title">${product.productName}</h4>
  <p class="card-text"> ${product.productDescription}</p>
<h5>Product price:${product.productPrice}$</h5>
</div>
<div class="d-flex  d-flex justify-content-center align-items-center">
  <button type="button" id="productAvailable"class="btn btn-primary m-1">${product.productAvailability}</button>
  <button type="button" id="notInStock"class="btn btn-danger m-2"><a onclick="deleteProduct()"><i class="fa fa-trash"></i></a></button>
  <button id="addToCart" type="button" class="btn btn-success"><a onclick="addToCart()"><small>Add to cart</small></a></button>
</div>
</div>
<br />
`
/*if(product.productAvailability=="in stock"){
   //console.log(product.productAvailability.checked),
   div.innerHTML +=document.getElementById('addToCart').disabled=false;
   
}else{
   div.innerHTML +=document.getElementById('addToCart').disabled=true;

}*/

});
};

/*const EnableDisable=()=> {
   div.innerHTML="";
   alert("ok");
   //Reference the Button.
   products.forEach(function(product,i) {
      console.log(products)
   //Verify the TextBox value.
   if (product.productAvailability.checked==true) {
      document.getElementById("addToCart").disabled =false;
   } else {
       //Disable the TextBox when TextBox is empty.
       document.getElementById("addToCart").disabled =true;
   }
});
}*/
const deleteProduct=(j) =>  {
products.splice(j,1);
modifyHTML();
};

const addToCart=()=>{ 
        printCartList.innerHTML="";
        printTotalPrice.innerHTML="";
        let grandTotal=0;
        clickCountProduct= clickCountProduct+1;
        console.log(clickCountProduct);
       document.getElementById("addToCart").addEventListener("onclick",addToCart);
         cartProducts.push(Object.entries(products).forEach(([i,v])=>{ 
          printCartList.innerHTML+=`<h6>${v.productName}&nbsp${v.productPrice}$*${clickCountProduct}<h6>`
                                     
                                       grandTotal+=v.productPrice*clickCountProduct;
         printTotalPrice.innerHTML=`<h4 class="text-capitalize">total price:${grandTotal}$</h4>`
}
   ))
   
}

document.getElementById("myButton").addEventListener("click",addProduct);
