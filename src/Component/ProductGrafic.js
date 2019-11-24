import React from 'react';
import { Line } from 'react-chartjs-2';

function ProductGrafic({ data }) {
    return (
        <Line
            options={{ responsive: true },{ legend: {
                display: true,
                position: 'top',
                labels: {
                  boxWidth: 80,
                  fontColor: '#34495e',  fontFamily :'Roboto',
                  fontSize:18,
                }
              }},{
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Precio x Kg ',
                            fontFamily :'Roboto',
                            fontSize:14,
                            fontColor:'#34495e',
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Dias ',
                            fontFamily :'Roboto',
                            fontSize:14,
                            fontColor:'#34495e',
                                                                                   
                        }
                    }]
                }
            }}
            data={data}
            width={300}
            height={200}

        ></Line>);

}

export default ProductGrafic;