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
            </div>
            <div className="my-5 text-right">
                {
                    showButtons
                        ? (<><button
                            className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={() => { setAlertVerifyOpen(true); setWhichFunc("delete"); }}
                        >
                            삭제
                        </button><button
                            className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800"
                            onClick={() => { setAlertVerifyOpen(true); setWhichFunc("반려"); }}
                        >
                                반려
                            </button><button
                                className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-800 hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-800"
                                onClick={() => { setAlertVerifyOpen(true); setWhichFunc("승인"); }}
                            >
                                승인
                            </button></>)
                        : null
                }
                <button
                    className="w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
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