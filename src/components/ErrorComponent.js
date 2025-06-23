import { useRouteError } from 'react-router-dom';
const ErrorComponent = ({ error }) => {
  const routeError = useRouteError();

  return (
    <div className='error-component'>
      <h1>
        {routeError.statusText} {routeError.status}
      </h1>
      <h1>{routeError.data}</h1>
      <h1>Please try again later.</h1>
    </div>
  );
};

export default ErrorComponent;
