import React from 'react'
import axios from 'axios'
const Createposts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
     await axios.post("http://localhost:3000/create-post",data).then((res)=>{
      console.log(res)
      
    })
  }
  return (
    <section className='create-post-section'>
        <h1>
            CreatePost
        </h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' placeholder='Enter Caption' required/>
            <button type='submit'>submit</button>
        </form>
    </section>
  )
}

export default Createposts
