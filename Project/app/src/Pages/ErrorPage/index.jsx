import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()
  console.log(error && error)
   /*
       <i>{error.statusText || error.message}</i>
    */
    return(
        <div id="error-page">
            <h2>Opps!</h2>
            <p>
            <i>{error.statusText || error.message}</i>
            </p>
        </div> 
    )
}