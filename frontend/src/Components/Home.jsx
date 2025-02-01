import React from 'react'
import Navbar from './Navbar';
import '../Components/Home.css'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();
    const clicker = () => {
        navigate('/singlepost')
    }
    const post = [{
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, consequatur ipsam architecto cum nihil praesentium quidem eius, ab vel officiis accusantium dicta cupiditate delectus consectetur eos explicabo culpa laboriosam ad.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid minus vero laborum eum hic culpa tenetur ipsum esse, perspiciatis odit officiis, accusantium quasi molestiae sapiente dicta saepe. Deleniti, pariatur.',
        img: 'https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, consequatur ipsam architecto cum nihil praesentium quidem eius, ab vel officiis accusantium dicta cupiditate delectus consectetur eos explicabo culpa laboriosam ad.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid minus vero laborum eum hic culpa tenetur ipsum esse, perspiciatis odit officiis, accusantium quasi molestiae sapiente dicta saepe. Deleniti, pariatur.',
        img: 'https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, consequatur ipsam architecto cum nihil praesentium quidem eius, ab vel officiis accusantium dicta cupiditate delectus consectetur eos explicabo culpa laboriosam ad.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid minus vero laborum eum hic culpa tenetur ipsum esse, perspiciatis odit officiis, accusantium quasi molestiae sapiente dicta saepe. Deleniti, pariatur.',
        img: 'https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg'
    }];
    return (
        <>
            <Navbar></Navbar>
            <div className='contents'>
                <div className='posts'>
                    {post.map((post) => (
                        <div className='post' key={post.id}>
                            <div className='content'>
                                <div className='report'>
                                    <h1>{post.title}</h1>
                                    <p>{post.desc}<a className='link_singlePost' onClick={clicker}>  read more</a></p>
                                </div>
                                <div className='img'>
                                    <img src={post.img} height={400} width={350} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;