import {useMemo} from 'react';
import React, { useEffect} from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
    );
    //EJE Y
    const scores = [2, 3, 3, 2, 4, 3, 3, 3, 3];
    const scores2 = [1, 2, 2, 1, 2, 2, 1, 2, 1];
    
    //EJE X
    const labels = [100, 200, 300, 400, 500, 600, 700];
    
    const options = {
        fill: false,
        responsive: true,
        scales: {
            y: {
                min:0,
            },
        },
        
    }

    
    
    export default function Graph(){
       
    
        
        const data = useMemo(function () {
            return {
                
                datasets: [
                    {
                        
                        label: 'Mis datos',
                        data: scores,
                        tension: 0.3,
                        borderColor: "rgb(69, 75, 107)",
                        pointRadius: 3,
                        pointBackgroundColor: "rgb(69, 75, 107)",
                        backgroundColor: "rgb(69, 75, 107)",
                    },
                    {
                        
                        label: 'Mis datos',
                        data: scores2,
                        tension: 0.3,
                        borderColor: "rgb(231, 76, 60)",
                        pointRadius: 3,
                        pointBackgroundColor: "rgb(231, 76, 60)",
                        backgroundColor: "rgb(231, 76, 60)",
                    }
                    
                    
                ],
                
                labels,
            };
            
        },[]);
        
        
        


return <Line data = {data} options = {options} />


};