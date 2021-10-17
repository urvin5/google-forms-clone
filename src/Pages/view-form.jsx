import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { viewForm } from "../Redux/actions";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { split } from "lodash";
export default function ViewForm() {
  const dispatch = useDispatch();
  const { uuid } = useParams();
  const { selectedForm } = useSelector((state) => state.reducer);
  const history = useHistory();

  useEffect(() => {
    dispatch(viewForm(uuid));
  }, [uuid]);

  function getQuestionWithType(question) {
    if (question.questionType === "text") {
      return (
        <Form.Field key={question.questionText}>
          <label>{question.questionText}</label>
          <input placeholder={question.questionText} />
        </Form.Field>
      );
    }
    if (question.questionType === "radio") {
      return (
        <Form.Group grouped key={question.questionText}>
          <label>{question.questionText}</label>
          {question.options?.split(",").map((option) => (
            <Form.Radio label={option} value={option} />
          ))}
        </Form.Group>
      );
    }
    if (question.questionType === "checkbox") {
      return (
        <Form.Group grouped key={question.questionText}>
          <label>{question.questionText}</label>
          {question.options?.split(",").map((option) => (
            <Form.Field label={option} control="input" type="checkbox" />
          ))}
        </Form.Group>
      );
    }
  }
  return (
    <>
      <h3>Form name: {selectedForm?.[0]?.formName}</h3>
      <Form>
        {selectedForm?.[0]?.questionList?.map((question) =>
          getQuestionWithType(question)
        )}
        <Button type="submit" onClick={() => history.push("/")}>
          Submit
        </Button>
      </Form>
    </>
  );
}
