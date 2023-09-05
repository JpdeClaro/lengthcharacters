
// using prompt
function runTextArea(){
let textArea = prompt ("Type anything inside the textbox." +"\n You only have 150 characters ");{
    alert("You have written " + textArea.length + " characters," + " and you only have " + (150-textArea.length) + " remaining characters left.");
}
}
