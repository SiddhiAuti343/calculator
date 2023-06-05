function clk(val){

        document.getElementById("scr").value=document.getElementById("scr").value+val;
}

function clrdisp(){
    document.getElementById("scr").value=" "

}

function eql(){
    var text=document.getElementById("scr").value;
    var result=eval(text);
    document.getElementById("scr").value=result
}