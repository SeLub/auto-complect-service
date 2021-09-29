/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* 
TODOs 
1. Функция которая формирует итоговое url в зависимости от
   текущей даты. 
  !  параметры 
             *дата в формате yyy-m-d (2016-7-5)
             *константа код валюты ИСО 4217
             *константа parammode =1 
2. fetch на сервер
3. Разбор полученного JSON
  !note: пример url 
  https://www.nbrb.by/api/exrates/rates/643?ondate=2019-04-05&parammode=1
*/

async function getExRate() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  const urlFinal = `https://www.nbrb.by/api/exrates/rates/643?ondate=${year}-${month}-${day}&parammode=1`;
  fetch(urlFinal)
    .then((resp) => resp.json())
    .then(function (data) {
      const officialExRate = data.Cur_OfficialRate;
      return officialExRate;
    })
    .catch(function (error) {
      console.error();
    });
}
export default getExRate;
