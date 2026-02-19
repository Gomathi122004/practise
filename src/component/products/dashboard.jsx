import { Link, Outlet } from "react-router-dom"
export const Dashboard =() =>{
return(
    <div>
      <h1>  this is dashboard page </h1>
      <Link to="productlist">productlist</Link><br />
      <Link to="productreview">productreview</Link><br />
      <Outlet/>

    </div>
)
}
