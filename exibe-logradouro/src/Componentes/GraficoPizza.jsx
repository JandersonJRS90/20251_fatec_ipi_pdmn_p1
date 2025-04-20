import React from 'react'
import { Chart } from 'primereact/chart'

const GraficoPizza = (props) => {
  const data = props.dds.reduce(function(obj, v){
    obj[v.uf] = (obj[v.uf] || 0) + 1;
    return obj;
  }, {})

  return (
    <Chart type="pie" data={{
      labels: Object.keys(data),
      datasets: [{data: Object.values(data)}]
    }} options={{rotation: 90}} />
  )
}

export default GraficoPizza