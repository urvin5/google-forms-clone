import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";
import { FormListCard } from "../Components/FormListCard";
import { getFormList } from "../Redux/actions";
export default function FormList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { formList } = useSelector((state) => state.reducer);
  useEffect(() => {
    dispatch(getFormList());
  }, []);

  if (formList?.length === 0) {
    return <Button onClick={() => history.push("/create")}>Create Form</Button>;
  }
  return <FormListCard formList={formList} />;
}
