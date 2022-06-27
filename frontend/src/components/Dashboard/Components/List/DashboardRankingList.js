import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

function DashboardRankingList() {
    let inventoryURL = useSelector((state) => state.inventoryURL);

    const [tenSeconds, setTenSeconds] = useState(false);
    const [agingRankingList, setAgingRankingList] = useState([]);
    const [amountRankingList, setAmountRankingList] = useState([]);
    useEffect(() => {
        axios.defaults.baseURL = inventoryURL;
        axios.get("/aging").then((res) => {
            setAgingRankingList(res.data);
        });
        axios.get("/amount").then((res) => {
            setAmountRankingList(res.data);
        });
        setTimeout(() => {
            setTenSeconds(!tenSeconds);
        }, 11000);
    }, []);
    return (
        <div className=''>
            <div className='rounded-lg h-full grid grid-rows-11 gap-3 text-center'>
                <div className="">오래된순위</div>
                {agingRankingList.map((agingItem, index) => {
                    return (
                        <div className="bg-cyan-500 rounded-lg mx-3 px-2 text-ellipsis overflow-hidden truncate">
                            {index + 1}. {agingItem.lot_no}
                        </div>
                    );
                })}
            </div>
            <div className='rounded-lg h-full grid grid-rows-11 gap-3 text-center'>
                <div className="">재고많은순위</div>
                {amountRankingList.map((amountItem) => {
                    return (
                        <div className="bg-cyan-500 rounded-lg mx-3 px-2 text-ellipsis overflow-hidden truncate ">
                            ({amountItem.sum}) {amountItem.item_name}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default DashboardRankingList