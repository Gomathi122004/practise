// export const Usercard = () =>{
// return(
// <div>
//     <h2>user card</h2>
//     <p>name: john doe</p>
//     <p>email: john.doe@example.com</p>
// </div>
// )
// }

export const  Usercard = ({name, email}) =>{
return(
<div>
    <h2>user card</h2>
    <p>name: {name}</p>
    <p>email: {email}</p>
</div>
)
}

export const compomemt1 = () =>{
    return(
        <>Created home</>
    )
}

