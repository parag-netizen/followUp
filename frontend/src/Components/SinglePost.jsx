import React from 'react'
import Navbar from './Navbar';
import '../Components/singlepage.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import Whiteboard from './Whiteboard';

const SinglePost = () => {

    const x = 'https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg'
    const y = 'https://images.pexels.com/photos/5599289/pexels-photo-5599289.jpeg'
    return <>
        <Navbar></Navbar>
        <div className='single'>
            <div className='content_singlePage'>
                <div className='user'>
                    <img src={y} alt="" />
                    <div className='info'>
                        <span>John</span>
                        <p>posted 2 days ago</p>
                    </div>
                    <button><Link to="/Write"><MdEdit className='edit_Button'></MdEdit></Link></button>
                    <button><MdDelete className='edit_Button'></MdDelete></button>
                </div>
                <img src={x} alt="" />
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem deserunt autem numquam veritatis odio quia in sit atque veniam illo corporis, repellendus hic dolores commodi suscipit iste sint architecto.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe doloremque debitis explicabo adipisci molestiae perspiciatis, dignissimos mollitia hic sunt quos tempora. Delectus ipsum earum ipsa eveniet repellat mollitia iste!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe doloremque debitis explicabo adipisci molestiae perspiciatis, dignissimos mollitia hic sunt quos tempora. Delectus ipsum earum ipsa eveniet repellat mollitia iste!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe doloremque debitis explicabo adipisci molestiae perspiciatis, dignissimos mollitia hic sunt quos tempora. Delectus ipsum earum ipsa eveniet repellat mollitia iste!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe doloremque debitis explicabo adipisci molestiae perspiciatis, dignissimos mollitia hic sunt quos tempora. Delectus ipsum earum ipsa eveniet repellat mollitia iste!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe doloremque debitis explicabo adipisci molestiae perspiciatis, dignissimos mollitia hic sunt quos tempora. Delectus ipsum earum ipsa eveniet repellat mollitia iste!</p>
            </div>
            <div className='menu'>
                <Whiteboard></Whiteboard>
            </div>
        </div>
    </>
}

export default SinglePost;