"use strict";var productContainer,productName=document.getElementById("productName"),productDesc=document.getElementById("productDesc"),productModel=document.getElementById("productModel"),productPrice=document.getElementById("productPrice"),productBtn=document.getElementById("productBtn"),formControl=document.getElementsByClassName("form-control"),myClose=document.getElementsByClassName("myClose"),mySearchInp=document.getElementById("mySearchInp"),productHeadline=document.getElementById("productHeadline"),successProductAlert=document.getElementById("successProductAlert"),dataRow=document.getElementById("dataRow"),currentIndex=0;function showAlert(){$(successProductAlert).fadeIn(500,function(){$(successProductAlert).fadeOut(2e3)})}function disableBtn(){for(var t=0;t<formControl.length-1;t++)""==formControl[t].value?productBtn.disabled=!0:productBtn.removeAttribute("disabled")}function addProducts(){var t={productName:productName.value,productDesc:productDesc.value,productModel:productModel.value,productPrice:productPrice.value};productContainer.push(t),localStorage.setItem("productsStorage",JSON.stringify(productContainer)),console.log("products added")}function showProducts(){for(var t="",e=0;e<productContainer.length;e++)t+='<div class="col-lg-4 col-md-6 col-sm-12 my-2 products"><div class="product"><div class="card p-1 text-center m-auto" style="width: 18rem;"><div class="d-flex justify-content-between"><i class="fas fa-edit fa-2x" onclick="updateProduct('+e+')"></i><i class="fa fa-times-circle fa-2x " onclick="deleteItem('+e+')"></i></div><img class="img-fluid" src="images/3191.png" class="card-img-top" alt="test"><div class="card-body"><h5 class="card-title">'+productContainer[e].productName+'</h5><p class="card-text">'+productContainer[e].productDesc+'</p><a href="#" class="btn btn-primary">'+productContainer[e].productPrice+" L.E</a></div></div></div></div>";document.getElementById("dataRow").innerHTML=t,productContainer=JSON.parse(localStorage.getItem("productsStorage")),productHeadline.style.display="block",searchItem.style.display="block"}function updateProduct(t){productName.value=productContainer[t].productName,productDesc.value=productContainer[t].productDesc,productPrice.value=productContainer[t].productPrice,productModel.value="sn123",productBtn.innerHTML="update product",currentIndex=t}function saveUpdate(){var t={productName:productName.value,productDesc:productDesc.value,productModel:productModel.value,productPrice:productPrice.value};productContainer[currentIndex]=t,localStorage.setItem("productsStorage",JSON.stringify(productContainer)),showProducts(),productBtn.innerHTML="add product"}function emptyFields(){for(var t=0;t<formControl.length;t++)formControl[t].value="";disableBtn()}function deleteItem(t){productContainer.splice(t,1),localStorage.setItem("productsStorage",JSON.stringify(productContainer)),showProducts()}null==localStorage.getItem("productsStorage")?(productContainer=[],productHeadline.style.display="none",searchItem.style.display="none"):(productContainer=JSON.parse(localStorage.getItem("productsStorage")),showProducts()),disableBtn(),productBtn.addEventListener("click",function(){"add product"==productBtn.innerHTML?(addProducts(),showAlert(),showProducts()):saveUpdate(),emptyFields()}),mySearchInp.addEventListener("keyup",function(t){for(var e="",o=0;o<productContainer.length;o++)productContainer[o].productName.toLowerCase().includes(t.target.value.toLowerCase())&&(e+='<div class="col-lg-4 col-md-6 col-sm-12 my-2 products"><div class="product"><div class="card p-1 text-center m-auto" style="width: 18rem;"><div class="d-flex justify-content-between"><i class="fas fa-edit fa-2x" onclick="updateProduct('+o+')"></i><i class="fa fa-times-circle fa-2x" onclick="deleteItem('+o+')"></i></div><img class="img-fluid" src="images/3191.png" class="card-img-top" alt="test"><div class="card-body"><h5 class="card-title">'+productContainer[o].productName+'</h5><p class="card-text">'+productContainer[o].productDesc+'</p><a href="#" class="btn btn-primary">'+productContainer[o].productPrice+"</a></div></div></div></div>");document.getElementById("dataRow").innerHTML=e});var navHeight=$("nav").outerHeight();$(window).scroll(function(){var t=$(window).scrollTop();navHeight<t?(document.querySelector("nav").style.position="fixed",document.querySelector("nav").style.zIndex="1000",document.querySelector(".my-Container").style.width="85%",document.querySelector("nav").style.width="85%",document.querySelector(".marginTop").style.marginTop="0rem"):(document.querySelector("nav").style.position="relative",document.querySelector(".my-Container").style.width="85%",document.querySelector("nav").style.width="100%",document.querySelector(".marginTop").style.marginTop="3rem")});