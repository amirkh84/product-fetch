var url = "https://dummyjson.com/products/";
var picture = document.getElementsByClassName("img");
var title = document.getElementsByClassName("title");
var info = document.getElementsByClassName("info");
var price = document.getElementsByClassName("price");
var card = document.getElementsByClassName("product-card");
var con = document.getElementsByClassName("container");
var ch = card[1].innerHTML;
for (let i = 1; i < 100; i++) {
    con[0].innerHTML += `<div class="product-card" >` + ch + "</div>";
};
for (let i = 1; i < title.length; i++) {
    fetch(url + i)
    .then(res => res.json())
    .then( function(data) { 
        picture[i].src = data.images[0];
        title[i].innerText = data.title;
        info[i].innerText = data.description;
        price[i].innerText = "$" + data.price;
    });
};