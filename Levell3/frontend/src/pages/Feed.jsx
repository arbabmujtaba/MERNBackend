import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Feed = () => {
    const navigate = useNavigate()
    const[posts, setposts] = useState ([
        {
            _id:1,
            image:"https://www.w3schools.com/w3css/img_lights.jpg",
            caption:"Image 1"
        }
    ])
    useEffect(() => {
        axios.get("http://localhost:3000/Posts").then((res) => {
            console.log(res.data.posts)
            setposts(res.data.posts)
            navigate("/feed")
        })
    })

  return (
    <section className='feed-section'>
        {
            posts.map((post) => (
                <div key={post._id} className='post-card'>
                    <h1>{post.caption}</h1>
                    <img src={post.image} alt={post.caption} />
                </div>
            ))
        }
    </section>
  )
}

export default Feed
