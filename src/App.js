import React, { useEffect } from "react";
import './App.css'
import Nav from "./components/Nav";
import Selection from "./components/Selection";
import Courses from "./components/Courses";
import {filterData , apiUrl} from './data.js'
import { useState } from "react";
import Spinner from "./components/Spinner";
import { toast } from 'react-toastify';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Category, setCategory] = useState(filterData[0].title);
  const likedCourses=()=>{

  }
  async function fetchData() {
   setIsLoading(true);
   try{
   const res = await fetch(apiUrl);
   if(!res.ok) throw new Error(res.statusText);
   const info = await res.json();
   setData(info.data);
   setIsLoading(false);
   console.log(info);
   }
   catch(err){
      console.log(err);
      toast.error("Error in fetching data");
      
   }
    
  }
  useEffect(() => {

    fetchData();
   
  },[]);
  return (<div className="App">
    <Nav/>
    <Selection filterData={filterData} setCategory={setCategory} />
   { isLoading? <Spinner/>:<Courses  data={data} Category={Category} likedcourses={likedCourses}/>}

  </div>);
};

export default App;
