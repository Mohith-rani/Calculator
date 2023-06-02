let a=" ";
function button(tag)
{
    if (tag==='='){
        a=eval(a)
    }
    
    else if (tag==='AC'){
        a=" "
    }
    else if (tag==='C'){
        a=a.slice(0,-1)
    }
    else {
        a=a+tag
    }
}
function display(){
    document.getElementById("demo").value=a;
}