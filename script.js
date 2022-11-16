let x;
let y;

function calc(){
    x = parseInt(document.getElementById('x').value);
    y = parseInt(document.getElementById('y').value);
    let hyp = Math.sqrt(x**2 + y**2);
    document.getElementById('answer').innerHTML = 'hypotunose = ' + hyp;

}



