import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import AlertVerify from '../Common/AlertVerify';
import { handleHotlineReload } from '../../store'

function HotlineDetail(props) {
    const { state } = useLocation();
    let navigate = useNavigate();
    let hotlineURL = useSelector((state) => state.hotlineURL);
    let store_language = useSelector((state) => state.language);
    let hotlineReload = useSelector((state) => state.hotlineReload);
    let dispatch = useDispatch();
    const [showButtons, setShowButtons] = useState(true)
    const [alertVerifyOpen, setAlertVerifyOpen] = useState(false)
    const [whichFunc, setWhichFunc] = useState("")


    function reloadHotlineDetail() {
        axios.defaults.baseURL = hotlineURL
        axios.get(`/id/${state.hotline_id}`)
            .then((res) => {
                if (res.data.status !== null) {
                    setShowButtons(false)
                } else {
                    setShowButtons(true)
                }
            })
            .catch((err) => { console.log(err) })
    }
    useEffect(() => {
        reloadHotlineDetail()
    }, [hotlineReload])

    useEffect(() => {
        reloadHotlineDetail()
    }, [])
    function tableReload() {
        dispatch(handleHotlineReload(true))
        dispatch(handleHotlineReload(false))
    }
    function rejectApprove() {
        axios.defaults.baseURL = hotlineURL
        axios.put('/confirms', {
            hotlineInfoList: [{ writer_id: state.writer_id, hotline_id: state.hotline_id }],
            status: whichFunc
        })
            .then((e) => {
                props.setAlertSucOpen(true);
                props.setAlertMessage(`선택한 게시글이 ${whichFunc}처리 되었습니다.`);
                setAlertVerifyOpen(false);
                tableReload();
            })
            .catch(() => {
                console.log({ writer_id: state.writer_id, hotline_id: state.hotline_id })
                props.setAlertFailedOpen(true);
                props.setAlertMessage(
                    "등록에 실패하였습니다, 다시 시도해주세요."
                );
                setAlertVerifyOpen(false);
                tableReload();
            })
    }
    // 삭제
    function deleteContent(params) {
        axios.defaults.baseURL = hotlineURL
        axios.delete('/',
            {
                data: {
                    hotlineIDList: [state.hotline_id],
                }
            })
            .then((res) => {
                props.setAlertSucOpen(true);
                props.setAlertMessage("선택한 항목이 삭제처리 되었습니다.");
                setAlertVerifyOpen(false);
                tableReload();
            })
            .catch((err) => {
                props.setAlertFailedOpen(true);
                props.setAlertMessage(
                    "등록에 실패하였습니다, 다시 시도해주세요."
                );
                setAlertVerifyOpen(false);
                tableReload();
            })
    }
    return (
        <div className='mx-auto'>
            <div className="">
                <div className="mx-auto pl-10">
                    <h1 className="text-3xl font-bold">{state.hotline_id}번글</h1>
                </div>
            </div>
            <div className='text-xl text-right'>{state.writer}</div>
            <div className='text-md text-right mb-10'>{state.reg_date}</div>
            <div className='shadow p-10'>
                {state.content}
                Examples of Dummy Data
                Analysts use dummy data in two primary contexts (we’ll look at a third later): testing new programs and testing modifications on existing program. Let’s look at an example of each below.

                Testing New Programs
                Imagine you own a big e-commerce website that sells watches in bulk. Your company is called Batch Watch — it’s your baby. One of the biggest assets the company has is the data it collects on vendors, its products, and customers.

                When you started the company, you didn’t have much cash to spend on an expensive database program, so you took the first inexpensive option that came your way. Unfortunately, this means your data is not well-modeled, and you’re not really sure how that initial data program’s technical skeleton is structured.

                After years of growth, you’ve now got cash to invest and want to implement a high quality database management system. However, you want to ensure the transfer is smooth and requires minimal downtime. You hire an IT consultant to execute the transfer.eration techniques in programs like Microsoft Excel quickly build dummy data sets.

                Let’s look at how to generate a test set in 10 steps:

                Identify observation IDs for the data set. Observation IDs are unique identifiers for each line of the data table. In the case of products, observation IDs could be product names or a numeric substitute. You need to identify the observations on which the table will be based. For example, you might use “PN1, PN2, PN3… PN10” as observation IDs for products.
                Identify dimensions for the data set. Dimension (or field) is another word for characteristic or trait. They’re a piece of information about the observation ID. You need to identify what information you will include about each product, and include them as headers in your data table. For example, you might use “Product Category, Product Price, Product Weight, Product Brand” as dimensions.
                Fill in observation ID titles. Once you know them, fill in the observation IDs. To do this, choose cell A1 in an Excel sheet and write “Product ID.” In cell A2, write “PN1.” In cell A3, write “PN2.” Then highlight those two cells and drag the arrow in the bottom right corner down 8 cells. Excel will automatically create a sequence of ten PNs. Look at this short clip to understand:
            </div>
            <div className="my-5 text-right">
                {
                    showButtons
                        ? (<><button
                            className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                            onClick={() => { setAlertVerifyOpen(true); setWhichFunc("delete"); }}
                        >
                            삭제
                        </button><button
                            className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                            onClick={() => { setAlertVerifyOpen(true); setWhichFunc("반려"); }}
                        >
                                반려
                            </button><button
                                className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lime-500 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                                onClick={() => { setAlertVerifyOpen(true); setWhichFunc("승인"); }}
                            >
                                승인
                            </button></>)
                        : null
                }
                <button
                    className="w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    onClick={() => { navigate(-1) }}
                >
                    뒤로가기
                </button>
            </div>
            <AlertVerify
                open={alertVerifyOpen}
                setOpen={setAlertVerifyOpen}
                func={whichFunc === "delete" ? deleteContent : rejectApprove}
            />
        </div>
    )
}

export default HotlineDetail