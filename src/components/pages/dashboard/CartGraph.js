import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartComponent = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
   
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((response) => response.json())
      .then((data) => {
        const categories = [];
        const successPercentages = [];

        data.forEach((departmentData) => {
          const total = departmentData.total;
          const closed = departmentData.closed;
          const successPercentage = ((closed / total) * 100).toFixed(2); 
          categories.push(departmentData.department);
          successPercentages.push(parseFloat(successPercentage));
        });

      
        setChartOptions({
          chart: {
            type: 'bar',
          },
          title: {
            text: 'Department-wise Success Percentage of Projects',
          },
          xAxis: {
            categories: categories,
            title: {
              text: 'Department',
            },
          },
          yAxis: {
            title: {
              text: 'Success Percentage (%)',
            },
          },
          series: [
            {
              name: 'Success Percentage',
              data: successPercentages,
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
