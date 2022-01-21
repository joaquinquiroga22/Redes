import {useMemo} from 'react';
import React, { useEffect} from "react";
// import FacebookJson from "../FacebookJson.json";
import {getdata} from '../data/Data.js'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
    );


// function useGetdata() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch("conteo_palabras.json", {
//             // method: 'POST',
//             headers: {
//                 "dataType": "json",
//                 "Accept": "application/json",
//             }
//         })
//             .then(response => response.json())
//             .then(datos => {
//                 console.log(datos)
//                 setData(datos);

//             })
//     }, []);
//     return data
// }


    //EJE Y
    const scores = [12, 5, 8, 15, 20, 16, 9, 17, 18];
    const scores2 = [18, 17, 14, 11, 12, 15, 19, 18, 20];
    //EJE X
    const labels = [100, 200, 300, 400, 500, 600, 700];

    var  labelArray = [];
    var NameArray = [];
    var WorkArray = [];
    //  const newData = FacebookJson.amigos.map((item) => ({
         
    //    }));
    
    const options = {
        fill: true,
        responsive: true,
        scales: {
            y: {
                min:0,
                max: 20,
            },
        },
        // legend: {
        //     display: true,
        //     labels: {
        //         color: 'rgb(255, 99, 132)'
        //     }
        // }
        
    }

    
    
    export default function BarGraph(){
       
    
        
        const data = useMemo(function () {
            
                
                return{
                        
                datasets: [
                    {
                        
                        label: "Facebook",
                        data: scores,
                        tension: 0.3,
                        borderColor: "rgb(69, 75, 107)",
                        pointRadius: 6,
                        pointBackgroundColor: "rgb(69, 75, 107)",
                        backgroundColor: "rgb(69, 75, 107)",
                    },
                    {
                        
                        label: 'Twitter',
                        data: scores2,
                        tension: 0.3,
                        borderColor: "rgb(231, 76, 60)",
                        pointRadius: 3,
                        pointBackgroundColor: "rgb(231, 76, 60)",
                        backgroundColor: "rgb(231, 76, 60)",
                    }
                    
                ],
                
                labels,
            
                }
        },[]);
        
        
        


return <Bar data = {data} options = {options} />


};