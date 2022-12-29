import { React, useState } from "react";

// components
import PieChartCreator from "../single-utility/PieChartCreator";
import AreaChartCreator from "../single-utility/AreaChartCreator";
import { FormModal } from "../single-utility/Modals";

const Result = () => {
    const [uploadFileChoice, setUploadFileChoice] = useState(false);

    return (
        <main className='relative mb-2 flex flex-col'>
            <div
                className='gradient-diagonal-background flex h-[60vh]
                  items-center justify-center'
            >
                <div
                    className='grid-col-3 container mx-auto grid h-[40vh] 
                    grid-flow-col gap-y-4 gap-x-10'
                >
                    <PieChartCreator />
                    <div
                        className='WEAK-TOPICS flex flex-col justify-center gap-y-3
                      border border-[#00bd7e] px-10 text-white'
                    >
                        <h2 className='gradient-diagonal-text text-xl font-semibold'>
                            Top 3 Weak topics
                        </h2>
                        <p>Data Reduction</p>
                        <p>Data warehousing</p>
                        <p>OLAP</p>
                    </div>
                    <div
                        className='STRONG-TOPICS flex flex-col justify-center gap-y-3 border
                      border-[#00bd7e] px-10 text-white'
                    >
                        <h2 className='gradient-diagonal-text text-xl font-semibold'>
                            Top 3 Strong topics
                        </h2>
                        <p>Types of database</p>
                        <p>KNN</p>
                        <p>OLAP</p>
                    </div>
                </div>
            </div>
            <div className='AREA-CHART container mx-auto'>
                <h2 className='my-6 text-xl font-semibold'>
                    Yearly Performance Chart
                </h2>
                <AreaChartCreator />
            </div>
            <button
                className='my-2 w-48 self-end rounded-full bg-cyan-600 px-3 py-2 text-white'
                onClick={() => setUploadFileChoice((prevState) => !prevState)}
            >
                Generate New Report
            </button>
            {uploadFileChoice ? (
                <FormModal title='Choose Excel file to upload' />
            ) : (
                ""
            )}
        </main>
    );
};

export default Result;
