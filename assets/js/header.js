function showIcon(anything){
    document.querySelector('.textbox').value=anything;
    let arr=document.getElementsByClassName('forOption');
    
    for (const item of arr) {
        if(item.innerText==anything)
        {
            item.classList.add('active-color');
        }
        else
        {
            item.classList.remove('active-color');
        }
    }
}

let dropdownI=document.querySelector('.dropdownIcon');
dropdownI.onclick=function(){
    dropdownI.classList.toggle('active');
}