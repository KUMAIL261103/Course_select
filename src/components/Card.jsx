import {FcLike ,FcLikePlaceholder} from 'react-icons/fc'
import {useState} from 'react';
import {toast} from 'react-toastify';
const Card = (props) => {
    const [readmore,setReadmore] = useState(false);
    const length = props.course.description.length>100;
    const partofdescription = `${props.course.description.slice(0,100)}...`;
    const {title,description,image} = props.course;
    const [like, setLike] = useState(false);
    const [likecolor,setLikecolor] = useState(<FcLikePlaceholder fontSize="1.9rem" border="50%"/>);
    const [likedCourses, setLikedCourses] = useState([]);
    // props.likedCoursesfun(likedCourses);
    const handleLike = () => {
        if(like){ 
                setLikedCourses(likedCourses.filter((course)=>course.id!==props.course.id));
                setLike(false);
                setLikecolor(<FcLikePlaceholder fontSize="1.9rem"/>);
                toast.warning("Like Removed");
            
        }else{
            if(likedCourses.length===0){
                setLikedCourses([props.course]);
            }else{
                setLikedCourses([...likedCourses,props.course]);
            }

            setLike(true);
            setLikecolor(<FcLike fontSize="1.9rem"/>);
            toast.success("You liked this course");
        }
    };
    return (  
    <div className="card">
        <div className="card-header">
        <img src={image.url} alt={title}/>
        <button className="btn-like" onClick={handleLike}>{likecolor}</button>
        </div>
        <div className="card-info">
            <p>{title}</p>
            <p>{readmore?description:partofdescription}
           {  length &&<span className="btn-readmore" onClick={()=>setReadmore(!readmore)}>{readmore?"Show Less":"Read More"}</span>}</p>
        </div>

    </div>);
}
 
export default Card;