import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { useSelector } from 'react-redux';
import axios from "axios"
import RightContent from '../Dashboard/RightContent';
import LeftContent from '../Dashboard/LeftContent';
function Dashboard() {


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })
  return (
    <div data-aos="fade-up">
      <div className='grid grid-cols-7 gap-5 h-full'>
        <LeftContent />
        <RightContent />
      </div>
    </div>
  )
}

export default Dashboard