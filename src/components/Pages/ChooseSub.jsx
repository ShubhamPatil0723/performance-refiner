import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getData } from "../../api/fetch";

const ChooseSub = () => {
    const navigate = useNavigate();
    const [subjectChoice, setSubjectChoice] = useState(null);
    const userToken = useLocation();

    const subjectsAssigned = [
        {
            id: "adbms",
            subName: "Advanced Database System",
        },
        {
            id: "nlp",
            subName: "Natural Language Processing",
        },
    ];

    const renderSubjectsList = () => {
        const renderedItems = subjectsAssigned.map((subject) => {
            return (
                <div className={subject.id} key={subject.id}>
                    <input
                        type='radio'
                        name='subjectChoice'
                        id={subject.id}
                        value={subject.subName}
                        required
                        onChange={(event) => {
                            return setSubjectChoice(event.target.value);
                        }}
                    />
                    <label htmlFor={subject.id}>{subject.subName}</label>
                </div>
            );
        });
        return renderedItems;
    };

    const onSubjectChoice = (event) => {
        event.preventDefault();
        navigate("/result", {
            state: { userToken: userToken.state, subjectChoice },
        });
    };

    return (
        <main className='container my-2 flex h-[67vh] w-[100vw] items-center justify-center'>
            <div
                className='CONTAINER flex h-52 w-64 flex-wrap items-center justify-evenly
                            shadow-lg sm:h-[30vh] sm:w-[60vw]'
            >
                <h1 className='FACULTY-NAME '>Sulakshana Vishpute</h1>
                <form
                    className='SUBJECTS flex flex-col gap-3'
                    onSubmit={(event) => {
                        onSubjectChoice(event);
                    }}
                >
                    {renderSubjectsList()}
                    <button
                        type='submit'
                        className='w-20 min-w-min self-end rounded bg-cyan-600'
                    >
                        View
                    </button>
                </form>
            </div>
        </main>
    );
};

export default ChooseSub;
