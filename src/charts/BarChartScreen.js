// import React, {useState, useEffect} from 'react';
// import {Bar} from 'react-chartjs-2';
// import { setLabels } from 'react-chartjs-2/dist/utils';
// import {getdata} from '../data/Data.js';

// const [labelsData, setLabelsData] = useState([]);
//     // const [generoMasculino, setGeneroMasculino] = useState([]);
//      const [generoFemenino, setGeneroFemenino] = useState([]);
// //Funcion Calcular Edad segun fecha de nacimiento

// //   function calculateAge(birthday) {
// //       var birthday_arr = birthday.split("/");
// //       var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
// //       var ageDifMs = Date.now() - birthday_date.getTime();
// //       var ageDate = new Date(ageDifMs);
// //       return Math.abs(ageDate.getUTCFullYear() - 1970);
// //   }

// // var age = calculateAge("15/04/1976");
// // console.log(age)

// const data = (canvas) => {
    
    
//     const ctx = canvas.getContext("2d");
//     const gradient = ctx.createLinearGradient(0, 90, 100, 0);
//     gradient.addColorStop(0, '#ff9a9e');
//     gradient.addColorStop(0.5, '#fad0c4');
//     gradient.addColorStop(1, '#fad0c4');
    
//     return {
//         labels: [],
//         datasets: [
//             {
//                 barPercentage: 0.5,
//                 barThickness: 10,
//                 maxBarThickness: 100,
//                 minBarLength: 2,
//                 label: '',          
//                 data: [], 
//                 backgroundColor: gradient,
//                 borderWidth: 1
//             },
//             {
//                 barPercentage: 0.5,
//                 barThickness: 10,
//                 maxBarThickness: 100,
//                 minBarLength: 2,
//                 label: '',          
//                 data: [], 
//                 backgroundColor: gradient,
//                 borderWidth: 1
                
                
//             }
//         ]
        
//     }
// }
// const options = {
    
//     responsive: true,
//     tooltips: {
//         mode: 'index',
//         intersect: false,
//     },
//     hover: {
//         mode: 'nearest',
//         intersect: true
//     },
//     scales: {
//         yAxes: [{
//             ticks: {
//                 beginAtZero: true
//             }
//         }]
//     },
//     legend: {
//         display: true,
//         position: 'bottom',
//         labels: {
//             fontColor: 'rgba(242, 38, 19, 1)'
//         }
//     },
    
// }



// const getChartData = async () => {
    
    
//     try{  
//         let labelsArray = [];
//         //let generoMasculinoArray = [];
//         let generoFemeninoArray = [];
//         const data = await getdata();
//         data.amigos.forEach(element => {
//             labelsArray.push(element['Basic Info']['Birthday'])
//             generoFemeninoArray.push(element['Basic Info']['Gender'])
            
//             // console.log(element['Basic Info'].)
//             //console.log(element['Basic Info']['Birthday'])
//         });
//         setLabelsData(labelsArray);
//         setGeneroFemenino(generoFemeninoArray);
//         //console.log(labelsArray)
//         // console.log(data)
//     }catch(err) {
//         // console.log(err);
//     }
// }


// export default function BarChartScreen(){
//     useEffect(() => {
//         getChartData();
        
//     }, []);
    
    
    
//     return(
//         <Bar data = {data} options = {options}/>
//         );
//     }


import React, {useState, useEffect} from 'react';

import {Bar} from 'react-chartjs-2';
import {getdata} from '../data/Data';


const BarChartScreen = () => {
    // const [lablesData, setLabelsData] = useState([]);
    // const [generoMasculinoData, setGeneroMasculinoData] = useState([]);
    // // const [deathsData, setDeathsData] = useState([]);
    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 90, 100, 0);
        const gradient1 = ctx.createLinearGradient(0, 90, 100, 0);
        gradient.addColorStop(0, '#ff9a9e');
        gradient.addColorStop(0.5, '#fad0c4');
        gradient.addColorStop(1, '#fad0c4');
        
        gradient1.addColorStop(0, '#B7F8DB');
        gradient1.addColorStop(0.5, '#50A7C2');
        gradient1.addColorStop(1, '#B7F8DB');
        
        return {
            labels: [1,2,3,4,5,6],
            datasets: [
                {
                    barPercentage: 0.5,
                    barThickness: 10,
                    maxBarThickness: 100,
                    minBarLength: 2,
                    label: 'Generos',
                    data: [10,20,30,40] ,
                    backgroundColor: gradient1,
                    borderWidth: 1
                },
                // {
                    //     barPercentage: 0.5,
                    //     barThickness: 10,
                    //     maxBarThickness: 100,
                    //     minBarLength: 2,
                    //     label: '',
                    //     data: [],
                    //     backgroundColor: gradient,
                    //     borderWidth: 1
                    // }
                ]
            }
        }
        const options = {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: 'rgba(242, 38, 19, 1)'
                }
            },
        }
        //     const getChartData = async () => {
            //         try{
                //             let labelsArray = [];
                //             let generoMasculinoArray = [];
                //             // let deathsArray = [];
                //             const data = await getdata();
                //             data.amigos.forEach(element => {
                    //                 labelsArray.push(element['Basic Info'].Gender);
                    //                 generoMasculinoData.push(element.Work);
                    //                 //console.log(element.Work)
                    //                 // deathsArray.push(element.deaths.total);
                    //             });
                    //             setLabelsData(labelsArray);
                    //             setGeneroMasculinoData(generoMasculinoArray);
                    //             // setDeathsData(deathsArray);
                    //         }catch(error) {
                        //             // console.log(error);
                        //         }
                        //     }
                        //     useEffect(() => {
                            //         getChartData();
                            //     }, []);
                            //     return (
                                //         <Bar data={data} options={options}/>
                                //     );
                                 }
                                
                                export default BarChartScreen;