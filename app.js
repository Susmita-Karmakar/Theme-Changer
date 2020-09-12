document.querySelector('#color_pic').addEventListener('click',function(){
    let my_color= document.querySelector('#my_color').value;
    // alert(my_color)
    document.querySelector('#col-code').textContent=my_color;
    document.documentElement.style.setProperty('--color-off', my_color);
    
 })