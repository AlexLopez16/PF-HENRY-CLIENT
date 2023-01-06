import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { FC } from "react";
import { State } from "../reducers/rootReducer";
import { validaToken } from "../actions/auth";

type Props = {
  children: JSX.Element;
};

export const PublicRoute: FC<Props> = ({ children }) => {
  const { logged, data } = useSelector((state: State) => state.auth);

  if (!logged) return children;

  if (!data.verify)
    return (
      <>
        <Navigate to={"/verifyemail"} />
      </>
    );

  switch (data.rol) {
    case "STUDENT_ROL":
    case "COMPANY_ROL":
      return (
        <>
          <Navigate to={"/projects"} />
        </>
      );
    case "ADMIN_ROL":
      return (
        <>
          <Navigate to={"/dashboard/graphs"} />
        </>
      );
  }

  return <></>;
};
