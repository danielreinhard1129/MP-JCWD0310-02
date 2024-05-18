import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

interface ChartConfigProps {
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick'
    | 'boxPlot'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | 'rangeArea'
    | 'treemap';
  series?: ApexOptions['series'];
  width?: string | number;
  height?: string | number;
  options?: ApexOptions;
  [key: string]: any;
}

interface ChartDataSeriesProps {
  name: string;
  data: number[];
}
[];

const ChartBarStatistic = ({
  data,
  categoriesProps,
}: {
  data: ChartDataSeriesProps[];
  categoriesProps: string[];
}) => {
  const chartConfigDefault: ChartConfigProps = {
    type: 'line',
    height: 'auto',
    series: data,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#ffff00'],
      plotOptions: {
        bar: {
          columnWidth: '50%',
          borderRadius: 1,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: '#ffff00',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
        categories: categoriesProps,
        title: {
          style: {
            color: '#ffff00',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#ffff00',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: '#ffff00',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: 'dark',
      },
    },
  };

  return (
    <>
      <Chart {...chartConfigDefault} />
    </>
  );
};

export default ChartBarStatistic;
