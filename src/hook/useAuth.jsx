import { use } from "react";
import { AuthContext } from "../provider/AuthContext";


const useAuth = () => {
  const authInfo =  use(AuthContext);
  return authInfo;

};

export default useAuth;



