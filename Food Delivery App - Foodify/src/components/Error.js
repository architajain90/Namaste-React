import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      Error page - {err.data}
      <h4>{err.status}</h4>
    </div>
  );
};

export default Error;
