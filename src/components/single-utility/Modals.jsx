import { React, useRef, useState } from "react";
import { postFile } from "../../api/fetch";

export const FormModal = ({ title }) => {
    const fileUpload = useRef();
    const [fileToUpload, setFileToUpload] = useState("");

    const onFormSubmit = (event) => {
        const formData = new FormData();
        formData.append("studentResults", fileToUpload);
        postFile(
            "/post",
            "POST",
            { "Content-Type": "multipart/form-data" },
            formData
        );
    };

    return (
        <div className='MODAL-OVERLAY absolute z-10 flex h-[100vh] w-[100vw] flex-col items-center justify-center backdrop-blur-xl backdrop-opacity-50'>
            <form
                className='MODAL-CONTAINER flex h-[40vh] w-[40vw] min-w-max flex-col items-start justify-center bg-white px-8 py-2 shadow-lg'
                onSubmit={(event) => onFormSubmit(event)}
            >
                <h1 className='TITLE text-md font-bold sm:text-xl md:text-2xl'>
                    {title}
                </h1>
                <div className='fileUpload flex flex-col items-baseline justify-between sm:flex-row'>
                    <input
                        type='file'
                        name='fileToUpload'
                        id='uploadFile'
                        ref={fileUpload}
                        className='hidden'
                        accept='.xlsx, .csv'
                        onChange={(e) => setFileToUpload(e.target.files[0])}
                    />
                    <label
                        className='UPLOAD max-w-fit cursor-pointer rounded-full bg-cyan-500 text-white'
                        htmlFor='uploadFile'
                    >
                        Choose File
                    </label>
                    <p className='CHOSEN-FILENAME'>
                        {fileToUpload.name ? fileToUpload.name : ""}
                    </p>
                </div>
                <button type='submit' className='self-end'>
                    Ok
                </button>
            </form>
        </div>
    );
};

export const messageModal = ({ title, message }) => {
    return (
        <div className='MODAL-OVERLAY flex h-[100vh] w-[100vw] flex-col items-center justify-center'>
            <form className='MODAL-CONTAINER flex h-[40vh] w-[40vw] min-w-max flex-col items-start justify-center gap-3 px-3 py-2 shadow-lg'>
                <h1 className='TITLE text-md mx-2 px-2 font-bold sm:text-xl md:text-2xl'>
                    {title}
                </h1>
                <hr />
                <button
                    type='submit'
                    className='CONFIRM sm:text-md bg-cyan-600 text-sm text-white shadow-md md:text-xl'
                >
                    Ok
                </button>
            </form>
        </div>
    );
};
