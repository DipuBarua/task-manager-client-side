import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className=" text-center font-bold">
            <h1 className=" text-5xl p-5">Opps!</h1>
            <p className=" text-red-600">Error: {error.statusText || error.message}</p>
            <span>Go Back </span>
            <Link to={'/'}>
                <button className="btn btn-ghost text-xl font-bold text-blue-600">Home</button>
            </Link>
            {
                error.status === 404 && <div>
                    <p className=" text-7xl font-bold text-red-600"> 400! </p>
                </div>
            }
        </div>
    );
};

export default ErrorPage;