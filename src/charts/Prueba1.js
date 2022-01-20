import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import Graph from './LineGraph';
 
function Prueba1()
{
    const[graph,setGraph]=useState([]);
    
    const[getdata,setGetData]=useState([]);
    
    
    const countryDetail = async () => {
        axios.get("FacebookJson.json")
        
        .then(response => {
            setGetData(response.data);
        });
        
        
    }
    useEffect(() => {
        countryDetail();
    }, []);
    
    const selectChart = (e) =>
    {   
        axios.get(`FacebookJson.json`)
        .then(res => {
            const countryData = res.data;
            let countryName = [];
            let budgetName = [];
            countryData.amigos.forEach(element => {
                console.log(element.Work)
                countryName.push(element.Work);
                budgetName.push(element.Name);
            });
            console.log(budgetName)
            console.log(countryName)
            setGraph({
                labels: budgetName,
                datasets: [
                    {
                        label: 'In Billions Dollar',
                        backgroundColor:[
                            'green',
                            'red',
                            'blue',
                            '#FFBF00',
                            '#DE3163',
                            'orange',
                            '#40E0D0',
                            '#6495ED',
                            '#CCCCFF',
                            '#FFBF00',
                            '#DE3163',
                            '#9FE2BF',
                            '#CD5C5C'
                        ],
                        borderWidth:0,
                        data: countryName
                    }
                ]
            });
        });
        
    }
    useEffect(() => {
        selectChart();
    }, []);
    // useEffect(() => {
    //     return () => {
    //       console.log("cleaned up");
    //     };
    //   }, []);
    
      const [didMount, setDidMount] = useState(false); 
    
      useEffect(() => {
           setDidMount(true);
       return () => setDidMount(false);
      }, [])
    
      if(!didMount) {
      return null;
      }
    
    return(
       
        <Bar
          data={graph}
           options={{
            title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
            },
            legend:{
                display:true,
                position:'right'
            }
        }}
        />
        );
    }
    export default Prueba1;