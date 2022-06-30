import React from 'react'
import { Tree } from 'react-tree-graph';
import { AnimatedTree } from 'react-tree-graph';
import './Tracking.css';
function Tracking() {
    const data = {
        name: 'Parent',
        children: [{
            name: 'Child One',
            children: [{
                name: 'Child One'
            }, {
                name: 'Child Two'
            }]
        }, {
            name: 'Child Two'
        }]
    };
    return (
        <div className='' id='tracking'>
            <AnimatedTree
                data={data}
                height={700}
                width={700}
                duration={800}
                nodeShape="circle"
            />;
        </div>
    )
}

export default Tracking