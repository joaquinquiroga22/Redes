import React, { useCallback, useEffect, useState } from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

function useGetdata() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("conteo_palabras.json", {
            // method: 'POST',
            headers: {
                "dataType": "json",
                "Accept": "application/json",
            }
        })
            .then(response => response.json())
            .then(datos => {
                console.log(datos)
                setData(datos);

            })
    }, []);

    return data
}

const callbacks = {
    getWordTooltip: word => word.value > 50 ? "blue" : "red",
}

function BurbujaPalabras() {
    const data3 = useGetdata()
    //    {data3.amigos && data3.amigos.map(item => (
    //        <ul key={item.id}>
    //            {item.Work}
    //        </ul>
    //    ))}


        const data = [
          { text: 'UNSJ', value: 1000 },
          { text: 'Comercial N', value: 200 },
          { text: 'first impression', value: 800 },
          { text: 'UNSJ', value: 1000000 },
          { text: 'UNER', value: 10 },
          { text: 'UNER', value: 10 },
          { text: 'Universidad Cat', value: 20 },
          { text: 'Universidad Cat', value: 10 },
          { text: 'Universidad Cat', value: 10 },
          { text: 'Universidad Cat', value: 30 },
          { text: 'Universidad Cat', value: 10 },
          { text: 'Universidad Cat', value: 50 },
          { text: 'Universidad Cat', value: 10 },
          { text: 'Universidad Cat', value: 10 },
          { text: 'Universidad Cat', value: 60 },
          { text: 'Universidad Cat', value: 70 },
          { text: 'Universidad Cat', value: 90 },
          { text: 'Universidad Cat', value: 100 },
          { text: 'Universidad Cat', value: 10 },
          { text: 'Universidad Cat', value: 200 },
          { text: 'Universidad Cat', value: 200 },
          { text: 'Universidad Cat', value: 200 },
          { text: 'Universidad Cat', value: 200 },
          { text: 'Universidad Cat', value: 200 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic.Administracion', value: 800 },
          { text: 'Lic Informatica', value: 800 },
          { text: 'Lic Informatica', value: 800 },
          { text: 'Lic Informatica', value: 800 },
          { text: 'Lic Informatica', value: 800 },
    // console.log(data3)
        ];

    const fontSize = useCallback((word) => Math.log2(word.value) * 5, []);
    const rotate = useCallback((word) => word.value % 50, []);
    const fill = useCallback((d, i) => scaleOrdinal(schemeCategory10)(i), []);
    //   const onWordClick = useCallback((word) => {
    //     console.log(`onWordClick: ${word}`);
    //   }, []);
    //   const onWordMouseOver = useCallback((word) => {
    //     console.log(`onWordMouseOver: ${word}`);
    //   }, []);
    //   const onWordMouseOut = useCallback((word) => {
    //     console.log(`onWordMouseOut: ${word}`);
    //   }, []);

    return (
        // <div>
        //     {data3.data && data3.data.map(e => (
                <WordCloud
                    data= {data}
                    width={500}
                    height={500}
                    font="Times"
                    fontStyle="italic"
                    fontWeight="bold"
                    fontSize={fontSize}
                    rotate={rotate}
                    //   callbacks= {callbacks}
                    spiral="archimedean"
                    padding={3}
                    random={Math.random}
                    fill={fill}
                //   onWordClick={onWordClick}
                //   onWordMouseOver={onWordMouseOver}
                //   onWordMouseOut={onWordMouseOut}
                />
        //     ))}
        // </div>
    );
}
export default BurbujaPalabras;