import React from 'react'
import { Handle, Position } from '@xyflow/react'
import './txtimg.css'
import default_image from '../assets/default_image.jpg'

const Txtimg = (props) => {
    console.log(props)
    return (
        <div className='image_txt'>
            <img src={default_image} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores architecto atque eius earum modi quisquam sit. Doloribus, veritatis. Consectetur optio adipisci pariatur laborum ducimus asperiores repudiandae, cupiditate dignissimos illum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores architecto atque eius earum modi quisquam sit. Doloribus, veritatis. Consectetur optio adipisci pariatur laborum ducimus asperiores repudiandae, cupiditate dignissimos illum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores architecto atque eius earum modi quisquam sit. Doloribus, veritatis. Consectetur optio adipisci pariatur laborum ducimus asperiores repudiandae, cupiditate dignissimos illum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores architecto atque eius earum modi quisquam sit. Doloribus, veritatis. Consectetur optio adipisci pariatur laborum ducimus asperiores repudiandae, cupiditate dignissimos illum.
            </p>
            <Handle position={Position.Left} type="target" draggable='true' />
            <Handle position={Position.Bottom} type='source' draggable='true' />
        </div>
    )
}

export default Txtimg;