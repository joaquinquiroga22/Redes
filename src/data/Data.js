
import axios from 'axios';
// import React, { useEffect, useState } from 'react';

 const baseUrl = 'FacebookJson.json';

 export const getdata = async () => {
    try{
        const {data} = await axios.get(baseUrl);
         return data;
     }catch(err){
         throw err;
     }
 }
// JSON.parse('amigos')
// JSON.stringify(useGetdata)
// function useGetdata() {
//     const [data, setData] = useState([]);
    
//     useEffect(() => {
//         fetch("FacebookJson.json",{
//             // method: 'POST',
//             headers: {
//                 "dataType": "json",
//                 "Accept": "application/json",
//             }
//         })
//         .then(response => response.json())
//         .then(datos => {
//             console.log(datos)
//             setData(datos);
            
//         })
//     }, []);
    
//     return data
// } 
// export default function Data(){
//     const data = useGetdata()
//     return (
        
//         <div style={{backgroundColor:'WHITE'}} >
//             {data.amigos && data.amigos.map(item => (
                
//                 <div key={item.id}>
                    
//                     <ul>
                        
//                     <li>{item.Name}</li>
//                      <li></li> 
                     
//                     <li>{item['Places Lived']}</li>
//                     {/* <li>{item['Contact Info']['Facebook']}</li> */}
//                   <div>
//                       <h2></h2>
//                   </div>
//                     </ul>
//                 </div>
//                 ))}
//         </div>
                
//     )
// }