import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = [
    { name: "Types of database", value: 60 },
    { name: "OLAP", value: 20 },
    { name: "Data Reduction", value: 10 },
    { name: "Association rule mining", value: 20 },
];

const PieChartCreator = () => {
    return (
        <div className='PIE-CHART col-span-1 row-span-2'>
            <Pie
                data={{
                    labels: [
                        "NLP",
                        "OLAP",
                        "Data Reduction",
                        "Association rule mining",
                    ],
                    datasets: [
                        {
                            label: "Topic-Wise Performance",
                            data: pieData,
                            backgroundColor: ["red", "blue", "green", "purple"],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default PieChartCreator;
