const axios = require('axios');



// cur_amount - количество исходной валюты
// cur_type - тип исходной валюты
// cur_targ - Целевая валюта т.е. та, в которую мы хотим перевести
export default function currency_convert(cur_amount, cur_type, cur_targ) { 
    let url = 'https://www.nbrb.by/API/'

    axios({
        method: 'get',
        url: `${url}/${cur_type}`,
        responceType: 'json'
        .then(function (responce){
                
        })
    });
}



// функция запроса из примера для API, для получения курса по аббревиатуре ParamMode = 2
// function ratetoday(p) {
//     $.getJSON(uri + 'ExRates/Rates/' + $('#iCur').val(), { 'ParamMode': p })
//      .done(function (data) {
//          $('<li>', { text: JSON.stringify(data) }).appendTo($('#res'));
//          $('#btn').removeAttr("disabled");
//      }).error(function (err) {
//          $('#btn').removeAttr("disabled");
//          alert('ошибка');
//      });
//     };

