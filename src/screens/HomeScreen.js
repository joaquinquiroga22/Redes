import React from 'react';
import BarChartScreen from '../charts/BarChartScreen';
import BarGraph from '../charts/BarGraph';
import LineGraph from '../charts/LineGraph';
import Prueba1 from '../charts/Prueba1';
import styles from './HomeScreen.module.css'
import PieGraph from '../charts/PieGraph.js';
import BurbujaPalabras from '../charts/BurbujaPalabras.js'
import Prueba2 from '../charts/Prueba2';

const HomeScreen = () =>{
    return(

          <div className= "container-fluid">
              <h3 className={styles.headerText}></h3>
              <div className="row">
              <section className={styles.section1} >
                  <div  className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-8 p-2">
                      <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sp-1m-2 mb-2">
                          <h4>Grafico de Barras</h4>
                              {/* <BarChartScreen/>    */}
                                <BarGraph/>
                               {/* <Prueba1/> */}
                      </div>
                  </div>
                  </section>
                  <section className={styles.section2} >
                      
                  <div  className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-8 p-2">
                  <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 p-1mb-2">
                          <h4>Grafico de Lineas</h4>
                               <LineGraph/>
                      </div>
                  </div>
                  </section>
                  <section className={styles.section3}>
                      
                  <div  className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-8 p-2">
                  <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
                          <h4>Grafico Circular</h4>
                          <PieGraph/>
                      </div>
                  </div>
                  </section>
                  <section className={styles.section4}>
                      
                  <div  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                      <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sp-1m-2 mb-2">
                          <h4></h4>
                              {/* <BarChartScreen/>    */}
                               <BurbujaPalabras/>
                      </div>
                  </div>
                  </section>
              </div>
          </div>
        );
}

export default HomeScreen;