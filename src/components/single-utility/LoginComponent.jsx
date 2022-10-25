// Future Update in UX

// import { React, useState, useEffect } from "react";

// const LoginComponent = ({
//     handleNextClick,
//     title,
//     placeholder,
//     buttonName,
// }) => {
//     const [inputValue, setInputValue] = useState("");

//     return (
//         <>
//             <form
//                 className='flex h-4/5 w-4/5 flex-col flex-nowrap
//                            justify-center gap-12'
//             >
//                 <label
//                     htmlFor='EMAIL-INPUT'
//                     className='EMAIL-LABEL text-4xl font-semibold'
//                 >
//                     {title}
//                 </label>
//                 <input
//                     type='text'
//                     value={inputValue}
//                     id='EMAIL-INPUT'
//                     className='EMAIL-INPUT rounded-xl border-b-2 border-gray-600 bg-transparent
//                                px-4 py-2 outline-none focus:border-cyan-500'
//                     placeholder={placeholder}
//                     onChange={(event) => {
//                         setInputValue(event.target.value);
//                     }}
//                 />
//                 <button
//                     className='NEXT flex h-10 w-24 items-center justify-center self-end
//                                rounded-full border border-cyan-500 px-3 py-2 text-lg
//                                hover:shadow-md hover:shadow-cyan-500/50
//                                xl:h-14 xl:w-36 xl:text-[1.25rem]'
//                     onClick={(event) => {
//                         handleNextClick(event, "password");
//                     }}
//                 >
//                     {buttonName}
//                 </button>
//             </form>
//         </>
//     );
// };

// export default LoginComponent;
