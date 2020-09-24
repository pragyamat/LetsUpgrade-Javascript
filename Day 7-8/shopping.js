let products =[
    {
        name:"Black Jacket",
        size:"M",
        color:"blacky-grey",
        price:1500,
        image:"product1.jpg",
        description:"Good looking black-grey jacket",
    },
    {
        name:"Blue Tshirt",
        size:"L",
        color:"Light Blue",
        price:650,
        image:"product2.jpg",
        description:"Good looking blue tshirt",
    },    
    {
        name:"Red Top",
        size:"M",
        color:"Maroon-red",
        price:550,
        image:"product3.jpg",
        description:"Good looking red top",
    },    
    {
        name:"Yellow Kurti",
        size:"S",
        color:"yellow",
        price:760,
        image:"product4.jpg",
        description:"Good looking yellow kurti",
    },    
    {
        name:"White T-shirt",
        size:"M",
        color:"white",
        price:450,
        image:"product5.jpg",
        description:"Good looking white T-shirt",
    },
    {
        name:"Pink T-shirt",
        size:"S",
        color:"Pink",
        price:350,
        image:"product6.jpg",
        description:"Cute pink tshirt",
    },
    {
        name: "Dark Demin Blue Jeans",
        size: "L-34",
        color: "Dark Navy Blue",
        price: 900,
        image: "product7.jpg",
        description: "Cool And Gentleman look Dark Demin Blue Jean",
    },
    {
        name: "Formal Pink Shirt",
        size: "L",
        color: "Light Pink",
        price: 1500,
        image: "product8.jpg",
        description: "Men's casual Pink Shirt outfit"
    },
    {
        name: "Cream Sheer Dress",
        size: "M",
        color: "Cream",
        price: 1000,
        image: "product9.jpg",
        description: "Party Dress Creamy Color"
    },
    {
        name: "Black Tshirt for Women",
        size: "M",
        color: "Black",
        price: 1500,
        image: "product10.jpg",
        description: "Casual Printed Black Tshirt for Women"
    },
    {
        name: "Orange Tshirt",
        size: "L",
        color: "Orange",
        price: 2000,
        image: "product11.jpg",
        description: "Casual printed orange tshirt for Men"
    },
    {
        name: "Embroidery Black Saree",
        size: "L",
        color: "Black",
        price: 1000,
        image: "product12.jpg",
        description: "Beautiful Black Saree with Embroidery"
    }
];

function displayProduct(product_data, who = "productwrapper")
{
    let productsString="";

    product_data.forEach(function(product_data, index)
    {
        //destructring data 
        let {name, size, color, price, image, description}=product_data;

        if ( who == "productwrapper")
        {
            productsString +=`
        <div class="product">
            <div class="productimage">
                <img src="D:/JavaScript/product images/${image}" width=100% />
            </div>
            <h3>${name}</h3>
            <p>Price : ${price}/-</p>
            <p>Size : ${size}</p>
            <p>Color : ${color}</p>
            <p>${description}</p>
            <p></p>
                <center>
                    <button onclick="addToCart(${index})">Add to Cart</button>
                </center>
            </p>
        </div>`
        }
        if (who == "cart")
        {
            productsString +=`
        <div class="product">
            <div class="productimage">
                <img src="D:/JavaScript/product images/${image}" width=100% />
            </div>
            <h3>${name}</h3>
            <p>Price : ${price}$</p>
            <p>Size : ${size}</p>
            <p>Color : ${color}</p>
            <p>${description}</p>
            <p></p>
                <center>
                    <button onclick="removeFromCart(${index})">Remove From Cart</button>
                </center>
            </p>
        </div>`
        }
    })
    
    document.getElementById(who).innerHTML = productsString;
}

displayProduct(products);

let cart = [];

function searchProduct(search_value)
{
    let searched_products=products.filter(function(product,index)
    {
        let search_string = product.name+" "+product.color+" "+product.description;
        return search_string.toUpperCase().indexOf(search_value.toUpperCase())!=-1;
    })
    displayProduct(searched_products);
}

function filterByPrice()
{
    let minprice = document.getElementById("minprice").value;
    let maxprice = document.getElementById("maxprice").value;

    let filtered_product =[];
    products.forEach(function(product, index)
    {
        if(product.price >= minprice && product.price <= maxprice)
        {
            console.log(product.price);
            filtered_product.push(products[index]);
        }
    });
    console.log(filtered_product);
    displayProduct(filtered_product);
}

let cartcount = 0;
let cartarray = [-1];
let forword = 0;

function addToCart(index)
{
    cartarray.forEach(function(a)
    {
        console.log(a);
        if (a == index)
        {
            forword = 0;
        }
        else{ forword = 1 }
    });
    if (forword == 1)
    {
        cart.push(products[index]);
        displayProduct(cart, "cart")
        cartcount++;
        document.getElementById("cartcount").innerHTML = "<h2>"+cartcount+"<h2>";
        cartarray.push(index);
        console.log(cartarray);
    }
    else
    {
        alert("Item is Already Added!");
    }
}

function removeFromCart(index)
{
    cart.splice(index, 1);
    displayProduct(cart, "cart");
    cartcount--;
    document.getElementById("cartcount").innerHTML = "<h2>"+cartcount+"<h2>";
}