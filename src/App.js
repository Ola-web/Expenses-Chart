import React from "react";
import { useState } from "react";

import Barchart from "./components/BarChart";
import './App.css'
import {DataGraph} from './databar'
import TopCard from "./components/TopCard";

const App = () => {
    const [dataGraph, setDataGraph] = useState({
        labels: DataGraph.map((data) => data.day),
        datasets: [{
            label: "",
            data: DataGraph.map((data) => data.amount), 
            backgroundColor: [
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(186, 34%, 60%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)"
            ],
            borderRadius: 5 ,
            borderSkipped: 'false'
           
           
            
        }],
        
       
    })
    return (
        <div style={{width: 500}}>
            <TopCard />
            <Barchart chartData={dataGraph} />
        </div>
    ) 
}

export default App