import React from 'react';
// import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Accords from './Accords';
// import { BlogCardData } from './Api';
// import {BlogCardData} from '../Component/Api';


const BlogDetails = () => {
  const { Id } = useParams();
  // const [blog, setBlog] = useState(null);
  // let aaa = BlogCardData.find((item) => item.id === Id);
  // console.log(aaa);
  // useEffect(() => {
    // let blog = BlogCardData.find((blog) => blog.id === Id);
  //   if (blog) {
  //     setBlog(blog);
  //   }
    
  // }, []);

  
  return (
    
    <div key={Id} className="my-5">
      <Link to="/blog" className='text-decoration-none d-inline-block ml-5 text-white p-1 rounded bg-danger'>↪ Back
      </Link>
      {/* <h1>{thisBlogdata.title}</h1> */}
      <div className='text-center container'>
        <h1><span style={styles.titc}>Post Id No. </span><span style={styles.title}>{Id}</span></h1>
      </div>

      <Accords />
    </div>
  )
}

const styles = {
  title: {
    color: '#fff',
    backgroundColor: 'red',
    padding: '0 10px',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'inline-block'

  },
  titc: {
    fontSize: '35px',
    fontWeight: 'bold'
  }

}

export default BlogDetails;