import {useMemo} from 'react';
import React, { useEffect} from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
    );
    //EJE Y
    // const scores = [2, 3, 3, 2, 4, 3, 3, 3, 3];
    // //EJE X
    // const labels = [100, 200, 300, 400, 500, 600, 700];
    
    const options = {
        fill: true,
        responsive: true,
        
        
    }

    
    
    export default function BarGraph(){
       
    
        
        const data = useMemo(function () {
            return {
                
                labels: ['15%', '20%', '30%', '5%', '20%', '10%'],
  datasets: [
    {
      label: '',
      data: [15, 20, 30, 5, 20, 10],
      backgroundColor: [
        'rgba(231, 76, 60, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(23, 32, 42, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255,0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(231, 76, 60, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(23, 32, 42, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 3,
    },
  ],
            
        }},[]);
        
        
        


return <Pie data = {data} options = {options} />


};