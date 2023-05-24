import React from 'react'
import BlogCard from '../Component/BlogCard';
import GridCard from '../Component/GridCard';
import Slider from '../Component/Slider';

const Home = () => {
  return (
    <div>
       <Slider />
       <BlogCard />
       <GridCard />
       
    </div>
  )
}

export default Home;