import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentWiseData } from '../../Redux/AppRedux/action';

const DepartmentChart = () => {
  const dispatch=useDispatch()

  const GraphData=useSelector(state=> state.GraphData)
  const successPercentage =
    GraphData.departments &&
    GraphData.totalClosed &&
    GraphData.totalRegistered &&
    GraphData.departments.map((department, index) => ({
      name: department,
      y: (GraphData.totalClosed[index] / GraphData.totalRegistered[index]) * 100,
    }));

  const chartOptions = {
    chart: {
      type: 'column',
      spacing: [30, 30, 30, 30]
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: GraphData?.departments,
      labels: {
        formatter: function () {
          const index = this.pos;
          const successPercent = successPercentage[index].y;
          const departmentName = this.value;
          return `<span style="font-weight: bold; fontSize: 16px">${successPercent.toFixed(0)}%</span><br/><span style="fontSize: 15px">${departmentName}</span>`;
        },
      },
      lineColor: 'gray',
      lineWidth: 2,
    },
    yAxis: [
      {
        gridLineWidth: 0,
        tickLength: 0,
        lineColor: 'gray',
        lineWidth: 2,
      },
      {
        title: {
          text: '',
        },
        labels: {
          format: '{value}',
        },
      },
      {
        title: {
          text: '',
        }
      },
    ],
    series: [
      {
        name: 'Total',
        data: GraphData?.totalRegistered,
        color: 'blue',
        dataLabels: {
          enabled: true,
          format: '{point.y}',
          style: {
            color: 'black',
          },
        },
      },
      {
        name: 'Closed',
        data: GraphData?.totalClosed,
        color: 'green',
        dataLabels: {
          enabled: true,
          format: '{point.y}',
          style: {
            color: 'black',
          },
        },
      },
    ],
  };

  useEffect(()=>{
   dispatch(getDepartmentWiseData())
  }, []);

  console.log(GraphData);

  return (
    <div className='chart-div'>
      <div className="shadow p-3 mb-5 bg-white rounded-3">
        {successPercentage ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            containerProps={{ style: { height: '400px' } }}
          />
        ) : (
          <div>Loading chart...</div>
        )}
      </div>
    </div>
  );
};

export default DepartmentChart