export const General = () =>{
    const arr = [1,2,3,4,5]
    const twomultiplied = arr.map((value) => value * 2)
    const isLengthOne = arr.length === 1 ? "true" : "false";
    return(
    <div> general dashboard 
        {
            arr.map((val)=>(<div>{val}</div>
                
                ))
        }
    </div>
)
}