import {useMemo} from 'react';
import React, { useEffect} from "react";

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
    //EJE Y
    const scores = [12, 5, 8, 15, 20, 16, 9, 17, 18];
    //EJE X
    const labels = [100, 200, 300, 400, 500, 600, 700];
    
    const options = {
        fill: true,
        responsive: true,
        scales: {
            y: {
                min:0,
                max: 20,
            },
        },
        
    }

    
    
    export default function BarGraph(){
       
    
        
        const data = useMemo(function () {
            return {
                
                datasets: [
                    {
                        
                        label: 'Datos',
                        data: scores,
                        tension: 0.3,
                        borderColor: "rgb(69, 75, 107)",
                        pointRadius: 6,
                        pointBackgroundColor: "rgb(69, 75, 107)",
                        backgroundColor: "rgb(69, 75, 107)",
                    },
                    {
                        
                        label: 'Datos 2',
                        data: scores,
                        tension: 0.3,
                        borderColor: "rgb(231, 76, 60)",
                        pointRadius: 6,
                        pointBackgroundColor: "rgb(231, 76, 60)",
                        backgroundColor: "rgb(231, 76, 60)",
                    }
                    
                ],
                
                labels,
            };
            
        },[]);
        
        
        


return <Bar data = {data} options = {options} />


};