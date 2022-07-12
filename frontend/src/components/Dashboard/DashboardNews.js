import { List } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DashboardNews() {
    const [news, setNews] = useState([])
    useEffect(() => {
        const client_id = "V150CctFTWDlQDQzBniz"
        const client_secret = "tXfMANbK_J"
        axios.get('https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/news.json', {
            params: {
                query: "poscoict",
                display: 50
            },
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret
            }
        })
            .then((res) => { setNews(res.data.items); console.log(res.data.items) })
    }, [])

    return (
        <div className=''>
            <div className='text-2xl font-bold mb-4'>Today's News</div>
            <List
                style={{
                    height: 350,
                    overflow: 'auto',
                }}
                itemLayout="horizontal"
                dataSource={news}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<div onClick={() => { window.open(item.link, '_blank') }} className="font-bold cursor-pointer">{item.title}</div>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>

    )
}

export default DashboardNews