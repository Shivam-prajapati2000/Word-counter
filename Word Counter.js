let textbox = document.getElementById("textbox")

textbox.addEventListener('input',function(){
    let text = this.value; 
    let char = text.length;
    document.getElementById("char").innerHTML = char ;

    text = text.trim();
    let words = text.split(" ");
    let cleanlist = words.filter(function(elm){
        return  elm != "";
    })
   /* let worlen = words.length;   */
    let clean_listlength = cleanlist.length;
    document.getElementById("word").innerHTML = clean_listlength;
})