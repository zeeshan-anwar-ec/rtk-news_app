import { Link } from "react-router-dom"

export const Page404 = () => {
  return (
    <h1 className="text-6xl text-center mt-5 font-bold">Wrong Url goto <Link className="text-sky-400" to={"/"}>Home Page</Link></h1>
  )
}
