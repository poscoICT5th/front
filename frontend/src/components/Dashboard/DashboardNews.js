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
            <div>DashboardNews</div>
            <List
                style={{
                    height: 380,
                    overflow: 'auto',
                }}
                itemLayout="horizontal"
                dataSource={news}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href={item.link}>{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>

    )
}

export default DashboardNews