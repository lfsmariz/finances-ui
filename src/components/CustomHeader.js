import { Link } from "react-router-dom"

const CustomHeader = ({children}) => {


  return(
    <div className="container my-5 align-items-center">
      <div className="row ">
        <div className=" my-3 col-7">
          <h1 className="center-title">{children}</h1>
        </div>
          <Link to="/" className="btn btn-primary mx-4 col my-5  col">
            Voltar para home
          </Link>
        </div>
    </div>
)
}

export default CustomHeader