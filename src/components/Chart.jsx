import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ColumnChart = ({zurassicPoints, standardPoints, karensFavPoints, msPoints}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      colors: ["#1A56DB"],
      series: [
        {
          name: "Points",
          color: "#1A56DB",
          data: [
            { x: "zu-rassic Park", y: zurassicPoints },
            { x: "The Standard", y: standardPoints },
            { x: "Karen's Favourites + Brian O.", y: karensFavPoints },
            { x: "MS Paint 2.0", y: msPoints },
          ],
        },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-12">
      <div id="column-chart" ref={chartRef}></div>
    </div>
  );
};

export default ColumnChart;
