import {useMemo} from 'react';
import React, { useEffect} from "react";
import TwitterIcon from '@mui/icons-material/Twitter';

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
    const scores = [10, 15, 18, 25, 30, 23, 12, 19, 16];
    const scores2 = [18, 17, 14, 11, 20, 21, 29, 38, 40];
    
    //EJE X
    const labels = ["", "", "Hombre", "", "Mujer", "", ""];
     
    const options = {
        fill: false,
        responsive: true,
        scales: {
            y: {
                min:10,
                max: 50,
            },
        },
        
    }

    
    
    export default function Graph(){
       
    
        
        const data = useMemo(function () {
            return {
                
                datasets: [
                    {
                        
                        label: "Facebook",
                        data: scores,
                        tension: 0.3,
                        borderColor: "rgb(69, 75, 107)",
                        pointRadius: 3,
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
            };
            
        },[]);
        
        
        


return <Line data = {data} options = {options} />


};