const Selection = ({filterData,setCategory,category}) => {
    const selectionHandler = (title) => {
        setCategory(title);
    }

    return (  <div className="selection">
        
        {filterData.map((item)=>{
            return ( <button  className={ `${category===item.title?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`}onClick={()=>selectionHandler(item.title)} key ={ item.id}> {item.title}</button>);
        })}
    </div>);
}
 
export default Selection;