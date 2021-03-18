import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGroupThunk } from "../../store/modules/getGroups/thunk";

const UpdateUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return <div>Update user</div>;
};

export default UpdateUser;
