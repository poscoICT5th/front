import React from 'react'
import Timeline from '../Mypage/Timeline'
import { Card } from 'antd';
const { Meta } = Card;
function Mypage() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-center ">

      <div className="grid grid-rows-3 gap-4 text-center">
      <Card
      // title="Card title"
      bordered={true}
      style={{
        width: 200
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="OOO Pro" description="web developer" />
          </Card>
          <div>2</div>
          <div>3</div>
        </div>
        
      <div className="grid grid-cols-2 grid-rows-3 gap-4 text-center">
          <div className='col-span-2 mx-auto'>Your Dashboard</div>
          <div className='col-span-2 mx-auto'>Your Dashboard</div>
          <div className='col-span-2 mx-auto'>Your Dashboard</div>
      
          



     </div>
    
     <div className="grid grid-rows-3 gap-4 text-center">
     <div><Timeline /></div>
          <div>ㅋㅋㅋ22</div>
          <div>ㅋㅋㅋ333</div>
        </div>
        
      </div>

   

    </div>



  )
}

export default Mypage