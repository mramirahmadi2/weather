// import {getCities} from './api/city.js';
// import * as cityAPIs from './api/city.js';
// import {getCities} from './api/city.js';
//
// console.log('hi');
//
// window.addEventListener('DOMContentLoaded', async ()=>{
//     const fouundedcitys = await getCities('Teh');
//     console.log('dom loded: ',fouundedcitys);
// })
// window.addEventListener('DOMContentLoaded',async () => {
//     const foundedCities = await getCities('Teh');
//     console.log(foundedCities);
// })


// import {getCities} from './api/city.js';

// window.addEventListener('DOMContentLoaded',async () => {
//     let foundedCities = await getCities('Teh');
//
//     console.log(foundedCities);
// })


async function searchCities(event){

    const foundedCities = await getCities(event.target.value);

    console.log(foundedCities);
}