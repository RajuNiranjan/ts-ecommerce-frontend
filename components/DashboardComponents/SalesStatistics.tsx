import { RootState } from "@/redux/store";
import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const SalesStatistics = () => {

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
    
  const series = [
    {
      name: "series 1",
      data: [20, 40, 30, 50, 70, 90, 60, 20, 40, 10, 50, 20],
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "basic-line",
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
    //   show: false, // Set this to false to hide the Y-axis values and labels
    },
    grid: {
      show: false, // Set this to false to hide the background grid
    },
    markers: {
      size: 0, // Set the size of the hover dot
      colors: isDarkModeEnableState ? "white" : "#fff", // Set the color of the hover dot
      strokeColors: "#008FFB", // Set the border color of the hover dot
      strokeWidth: 4, // Set the border width of the hover dot
      hover: {
        size: 8, // Set the size of the hover dot when hovering over it
      },
    },
    tooltip: {
        enabled: true, // Enable tooltip
        enabledOnSeries: undefined, // Enable tooltip on all series
        x: {
          show: true, // Show tooltip on x-axis
        },
      },
    fill: {

    }
  };

  return (
    <div className={`w-full h-[550px] ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md rounded-[8px] px-[20px] box-border py-[20px]`}>
      <Chart
        series={series}
        type="area"
        options={options}
        height={500}
      />
    </div>
  );
};

export default SalesStatistics;
