import Card from "./Card";
// import {useState} from 'react';
const Courses = ({data,Category,likedcourses}) => {
    const finaldata = [];
   
    // const [likedCourses,setlikedCourses] = useState([]);
    // const likedCoursesfun = () => {
    //     setlikedCourses(likedcourses);
    // }
    //getcourses function returns you one full array of collection of diff courses that are received from the api
    const getCourses = ()=>{
       if(Category==="All"){
        Object.values(data).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    
                    finaldata.push(course);
                })
        })
        return finaldata;
     }
   // else if(Category==="Liked Courses"){
    //     if(likedCourses.length===0){
    //         return <p>No Liked Courses</p>;
    //     }else{
    //         return likedCourses;
    //     }
    // }
    else{
        return data[Category];   
        }
    }
        if (!Array.isArray(finaldata)) {
            return   <p>No data available</p>;; 
        }
    return (<div className="container">
        { getCourses().map((course)=>{
            return(<Card course={course} 
                // likedcoursefun={likedCoursesfun}
            />);
        })}
    </div>);
}

export default Courses;
