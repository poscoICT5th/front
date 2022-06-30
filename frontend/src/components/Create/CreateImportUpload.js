import React, { useEffect, Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
import FixedInput from '../Common/Conditions/FixedInput'
import ReactFileReader from 'react-file-reader';
import Papa from "papaparse";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { handleImportReload } from '../../store'
function CreateImportUpload(props) {
    let logisticsImportURL = useSelector((state) => state.logisticsImportURL)
    const cancelButtonRef = useRef(null)
    const allowedExtensions = ["csv"];
    // This state will store the parsed data
    const [data, setData] = useState([]);

    // It state will contain the error when
    // correct file extension is not used
    const [error, setError] = useState("");

    // It will store the file uploaded by the user
    const [file, setFile] = useState("");

    // This function will be called when
    // the file input changes
    const handleFileChange = (e) => {
        setError("");

        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                return;
            }

            // If input type is correct set the state
            setFile(inputFile);
        }
    };
    const handleParse = () => {

        // If user clicks the parse button without
        // a file we show a error
        if (!file) return setError("Enter a valid file");

        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();

        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true, encoding: "utf-8" });
            const parsedData = csv?.data;
            const data = Object.values(parsedData)
            axios.defaults.baseURL = logisticsImportURL
            axios
                .post("/import", data)
                .then((res) => {
                    alert("입고요청이 등록되었습니다.")
                    dispatch(handleImportReload(true))
                    props.setOpen(false)
                    dispatch(handleImportReload(false))
                })
                .catch((err) => {
                    console.log(data)
                    alert(err);
                });
            setData(data);
        };
        reader.readAsText(file);

    };
    let dispatch = useDispatch();

    return (
        <div>
            <Transition.Root show={props.open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={(props.setOpen)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 transition-opacity bg-opacity-75" />
                    </Transition.Child>
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="bg-white dark:bg-gray-700 relative rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-lg">
                                    <div className='mx-auto'>
                                        <div className="font-bold text-2xl text-center my-5">입고등록</div>
                                        <div className="gap-6">
                                            <div className="mt-5 md:mt-0 md:col-span-2">
                                                <div className="shadow overflow-hidden sm:rounded-md">
                                                    <div className="px-4 py-5 sm:p-6">
                                                        <div className="mt-5 md:mt-0 md:col-span-2">
                                                            <div className="overflow-hidden sm:rounded-md">
                                                                <div className="px-4 py-5 sm:p-6 rounded-lg">
                                                                    <div>
                                                                        <div>
                                                                            <div>
                                                                                파일을 등록해주세요
                                                                            </div>
                                                                            <input
                                                                                onChange={handleFileChange}
                                                                                id="csvInput"
                                                                                name="file"
                                                                                type="File"
                                                                                className=''
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 sm:px-6 text-right">
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => props.setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                취소
                                            </button>
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-300 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={handleParse}
                                                ref={cancelButtonRef}
                                            >
                                                등록
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default CreateImportUpload