import { Link } from "react-router";

function PageNotFound(){
    return(
        <div style={{textAlign:'center'}}>
            <h1>Page Not found</h1>
            <div>
            <Link to="/">Go to Home Page</Link>

            </div>
            <img style={{width:"60%"}} src="https://images.herzindagi.info/image/2024/Jun/error-404-meaning.jpg" alt="" />
        </div>
    )
}
export default PageNotFound;