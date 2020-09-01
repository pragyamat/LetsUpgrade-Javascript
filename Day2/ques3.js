// Question-3
// Program to search for an element in an array of strings.
let subject = ["Physics", "Maths", "Chemistry", "Social Science", "Biology", "Hindi"];
// To search Chemistry
for (let i = 0; i < subject.length; i++){
    if(subject[i] == "Chemistry"){
        console.log("The subject "+ subject[i]+" is present at index " + i);
    }
}
