import {open, close, } from './popup_module.js';

let call_btn = document.querySelector('.call-btn');
let popup_call = document.querySelector('.popup-call'); 
let popup_close = document.querySelector('.popup-close')

call_btn.onclick = function(){
    open(popup_call)
} 

popup_close.onclick = function(){
    close(popup_call)
}

window.onclick = function(e){
    if (e.target == popup_call){
        close(popup_call)
    }
}
