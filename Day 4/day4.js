// Question-1
//  A.On click of the second button a change of the existing image to a new image 
//  B.On click of the third button change to once again 
//  C.On click of first image should come back
function changeToFirst(){
    const ele=document.getElementsByClassName("image");
    ele[0].src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
}
function changeSecond(){
    
    const ele=document.getElementsByClassName("image");
    ele[0].src="data:image/jpeg;base64,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";
}
function changeThird(){
    const ele=document.getElementsByClassName("image");
    ele[0].src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/g9a9m-MHM425BWQ9F-Full-Image_GalleryBackground-en-US-1521579412582._SX1080_.jpg";
}

// Question-2
//  A.Write Something in the first input 
//  B.On click of the button the content of input one should be copied in the second input 
function copyContent(){
    const ele=document.getElementsByClassName("inp");
    ele[1].value=ele[0].value; 
}

// Question-3
//  Create an array of objects with objects having the following properties
//  A.{name(string),age(number),country(string),hobbies array(string[])}
//  B.Write a function to display all the objects of the console

let arr=[
    {
        name:"Ram",
        age:20,
        country:"India",
        hobbies:["reading","cooking","gardening"]
    },
    {
        name:"Shyam",
        age:27,
        country:"USA",
        hobbies:["writing","drawing","walking"]
    },
    {
        name:"Tinku",
        age:35,
        country:"India",
        hobbies:["singing","dancing","playing"]
    },
];
function displayObjects(){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
displayObjects();

// Question-4
//  Following third question
//  A.Write a function to display all the objects having age less than 30
//  B.Write a function to dispaly all the objects having country India 
function age(){
    for(let i=0;i<arr.length;i++){
        if((arr[i].age)<30){
            console.log(arr[i]);
        }
    }
}
age();

function country(){
    for(let i=0;i<arr.length;i++){
        if((arr[i].country=="India")){
            console.log(arr[i]);
        }
    }
}
country();
