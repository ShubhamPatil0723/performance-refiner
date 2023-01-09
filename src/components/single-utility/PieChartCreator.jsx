import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartCreator = ({ pieData }) => {
    const labels = pieData.map((data) => {
        return data.name;
    });

    const renderLegend = () => {
        const colors = [
            "#d81159",
            "#8f2d56",
            "#218380",
            "#fbb13c",
            "#73d2de",
            "#09bc8a",
        ];
        let i = -1;
        const legends = pieData.map((data) => {
            i++;
            let color = colors[i];
            if (i > colors.length) {
                i = 0;
            }
            return (
                <div
                    className='LEGEND grid grid-cols-2 items-center gap-2'
                    key={data.name}
                >
                    <div
                        className={`COLOR h-5 w-14 justify-self-end`}
                        style={{ backgroundColor: color }}
                    ></div>
                    <li>{data.name}</li>
                </div>
            );
        });
        return legends;
    };

    return (
        <div className='PIECHART__CONTAINER'>
            <div className='PIE-CHART relative col-start-1 col-end-2 row-span-2 mx-auto justify-center'>
                <Pie
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                label: "Topic-Wise Performance",
                                data: pieData,
                                backgroundColor: [
                                    "#d81159",
                                    "#8f2d56",
                                    "#218380",
                                    "#fbb13c",
                                    "#73d2de",
                                    "#09bc8a",
                                ],
                                borderColor: [
                                    "#d81159",
                                    "#8f2d56",
                                    "#218380",
                                    "#fbb13c",
                                    "#73d2de",
                                    "#09bc8a",
                                ],
                                weight: 2,
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    }}
                />
            </div>
            <ul className='row-span-2 flex flex-col gap-y-3 place-self-center text-white'>
                {renderLegend()}
            </ul>
        </div>
    );
};

export default PieChartCreator;
