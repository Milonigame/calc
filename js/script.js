'use strict';

const inputRub=document.querySelector('#rub'),
      inputUsd=document.querySelector('#usd'); 

inputRub.addEventListener('input', ()=>{
    const request=new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type','application/json;charset=utf-8');
    request.send();

 request.addEventListener('load', ()=>{
     if (request.status===200){
        const data=JSON.parse(request.response);
        inputUsd.value=(+inputRub.value/data.current.usd).toFixed(2);
    }else{

         inputUsd.value='Что-то пошло не так';
    }

 });


    //status-какой статус,например 404 или 101 и тд.
    //statusText-текстовое описание ответа от сервера
    //response -ответ от сервера,
    //тот ответ который нам задал бэкенд разработчик
    //readyState-текущее состояние запроса;




});
