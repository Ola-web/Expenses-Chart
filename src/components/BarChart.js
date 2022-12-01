import React from 'react' 
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'
import './BarChart.css'



function BarChart({chartData}) {
  const arryOne = [17.45,34.91,52.36,31.07,23.39,43.28,25.48]
   return (
    <div className='barChart'>
    <h2>Spending - Last 7 days</h2>
   <Bar 
      data={chartData} 
      options={{
         aspectRatio: 2, 
         plugins: {
          tooltip: {
          
            callbacks: {
              beforeTitle: function(context){
                return `$${arryOne[context[0].dataIndex]}`
              },
              title: function(context) {
                return
              },
              label: function(context) {
                return
              },
             
            },
            backgroundColor: 'hsl(25, 47%, 15%)',
            yAlign: 'bottom',
            boxWidth: 4,
            titleFont: {weight:'bold'}, 
            caretSize: 0,
            titleMarginBottom: 0,
           
          },

          legend: {
            display: false
          }
        },
        layout: {
          padding: {
            top: 20
          }
        },
      
            scales: {
             
              title: {
                display: false,
               
              },
             x: {
              
              ticks: {
                font: {
                  family: "'DM Sans', sans-serif",
                  fontWeight: '700',
            
                }
              },
               grid: {
                 display: false,
                 borderColor: 'white',
               
               }
             },
             y: {
               display: false,
               grace: '5%',
               grid: {
                 display: false
               }
             }
           }
         
        
}} />
<hr />
<div className='barChart-bottom'>
  <div className='barChart-bottomLeft'>
    <p>Total this month</p>
    <h1>$478.33</h1>
  </div>
  <div className='barChart-bottomRight'>
    <h5>+2.4%</h5>
    <p>from last month</p>
  </div>
</div>


</div>
   )
}

export default BarChart