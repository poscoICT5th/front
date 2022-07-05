import React from 'react'

function DashboardBannerBoxPosco() {
    const categorys = [
        {
            title: "포스코",
            page: "https://www.posco.co.kr/homepage/docs/kor6/jsp/s91a0000001i.jsp",
            image: "http://photo.sentv.co.kr/photo/news/2019/04/16/1555391773.png"
        },
        {
            title: "포스코건설",
            page: "https://www.poscoenc.com:446/ko/index.aspx",
            image: "https://www.poscoenc.com:446/ko/common/images/logos/og.png"
        },
        {
            title: "포스코인터내셔널",
            page: "https://www.poscointl.com/kor/index.do",
            image: "https://img.hankyung.com/photo/202112/01.28039309.1-1200x.jpg"
        },
        {
            title: "포스코에너지",
            page: "https://www.poscoenergy.com/_service/main.asp",
            image: "https://www.poscoenergy.com/_ui/down/energy_Kor.jpg"
        },
        {
            title: "포스코케미칼",
            page: "https://www.poscochemical.com/",
            image: "https://www.thelec.kr/news/photo/202110/14722_13223_2221.jpeg"
        },
        {
            title: "포스코스틸리온",
            page: "https://www.poscosteeleon.com/kr/main.do",
            image: "https://www.jungle.co.kr/image/e610096c473782dbe2b5de92"
        },
        {
            title: "포스코엠텍",
            page: "https://www.poscomtech.com/",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzFtDPVRcjpEMunSqppBsl2ZiwhH8a_Qpn372EA9NvsbK6QnVH37YVTn794WCeZjTGm4&usqp=CAU"
        },
        {
            title: "포스코A&C",
            page: "https://www.poscoanc.com/kr/main/index.do",
            image: "https://www.poscoanc.com/common/images_en/icon/ci_img4.png"
        },
        {
            title: "포스코인재창조원",
            page: "https://lp.posco.co.kr/s22d/web/kor/html/index.html",
            image: "https://imgs.jobkorea.co.kr/Images/Logo/200/p/o/2815e00etcnwgjlbobord_4520wdhwgsrvswgetij2ew.gif?p=y&hash=c"
        },
    ]

    return (
        <div className='grid grid-cols-3 text-center'>
            {
                categorys.map((category) => {
                    return <div className='cursor-pointer' onClick={() => { window.open(category.page, '_blank') }} key={category.title}>
                        <div>
                            <img src={category.image}
                                alt=""
                                srcset=""
                                className="object-fit h-20"
                            />
                        </div>
                        <div className='text-slate-700 dark:text-white text-center font-bold'>
                            {category.title}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default DashboardBannerBoxPosco