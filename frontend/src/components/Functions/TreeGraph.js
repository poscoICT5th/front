import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Tree from 'react-d3-tree';
import { useSelector } from 'react-redux';
import DetailTracking from '../Detail/DetailTracking';
import useCenteredTree from './CenterTree';
import './Tracking.css';

function TreeGraph(props) {
    let traceBack = useSelector((state) => state.traceBack)

    const [openDetail, setOpenDetail] = useState(false);
    const [data, setData] = useState({})
    const [nodeDatas, setNodeDatas] = useState({})
    const [nodeData, setNodeData] = useState({})
    const [clickNodeLot, setClickNodeLot] = useState("")
    const [translate, containerRef] = useCenteredTree();
    const containerStyles = {
        width: "100%",
        height: "100vh",
        textAlign: "center"
    };
    useEffect(() => {
        setNodeData({})
        axios.defaults.baseURL = traceBack
        axios.get(`/lotno/${props.lot_no}`)
            // axios.get(`/lotno/testlot123123`)
            .then((res) => {
                setData(getLotData(res.data));
            })
            .catch((err) => { console.log(err) })
    }, [props.lot_no])

    function getLotData(item) {
        setNodeDatas({ ...nodeDatas, [item.lot_no]: item })
        if (!Array.isArray(item.consumed) || item.consumed.length === 0) {
            return {
                name: item.lot_no,
                children: [],
                attributes: {
                    "물품코드": item.item_code,
                    "재고생성일자": item.item_code,
                },
            }
        }
        else if (Array.isArray(item.consumed) && item.consumed.length !== 0) {
            return {
                name: item.lot_no, children: item.consumed.map(x => {
                    return getLotData(x)
                })
            }
        } else {
            return {
                name: item.lot_no,
                children: [],
                attributes: {
                    "물품코드": item.item_code,
                    "재고생성일자": item.item_code,
                },
            }
        }
    }
    function clickLot(params) {
        setNodeData(nodeDatas[params])
        setOpenDetail(true)
    }

    return (
        <div style={containerStyles} ref={containerRef}>
            <Tree
                data={data}
                onNodeClick={(e) => { clickLot(e.data.name) }}
                enableLegacyTransitions
                translate={translate}
                // onNodeMouseOver={(e) => { console.log(e) }}
                pathFunc='elbow'
                nodeSize={{ x: 200, y: 200 }}
                collapsible
                centeringTransitionDuration={800}
            />
            <DetailTracking
                openDetail={openDetail}
                setOpenDetail={setOpenDetail}
                detailData={nodeData}
                title={clickNodeLot}
            />
        </div>
    )
}

export default TreeGraph