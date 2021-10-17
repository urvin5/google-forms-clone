import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FormListCard } from "../Components/FormListCard";
import { getFormList } from "../Redux/actions";
export default function FormList() {
  const dispatch = useDispatch();
  const { formList } = useSelector((state) => state.reducer);
  useEffect(() => {
    dispatch(getFormList());
  }, []);

  return <FormListCard formList={formList} />;
}
