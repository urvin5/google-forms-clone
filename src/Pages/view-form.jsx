import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { viewForm } from "../Redux/actions";

export default function ViewForm() {
  const dispatch = useDispatch();
  const { uuid } = useParams();

  useEffect(() => {
    dispatch(viewForm(uuid));
  }, [uuid]);
  return <div></div>;
}
