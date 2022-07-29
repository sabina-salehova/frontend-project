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

let header_bottom_dr_icon=document.querySelector('.all-categories');
header_bottom_dr_icon.onclick=function(){    
    header_bottom_dr_icon.classList.toggle('dr-active');
}