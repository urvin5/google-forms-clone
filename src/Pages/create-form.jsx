import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button, Card, Form, Header, List } from "semantic-ui-react";
import { QuestionModal } from "../Components/QuestionModal";
import { createForm } from "../Redux/actions";
import { v4 as uuid } from "uuid";

export default function CreateForm() {
  const [formData, setFormData] = useState({ name: "" });
  const [questionList, setQuestionList] = useState([]);
  const [questionModal, setQuestionModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  function handleDeleteQuestion(index) {
    setQuestionList((data) => data.filter((item, i) => i !== index));
  }
  function handleFormSubmit() {
    const data = {
      formName: formData.name,
      questionList,
      formSlug: uuid(),
      createdAt: new Date(),
    };

    dispatch(createForm(data));
    localStorage.setItem(
      "formList",
      JSON.stringify([
        ...(JSON.parse(window.localStorage.getItem("formList")) || []),
        data,
      ])
    );
    history.push("/");
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Header as="h2">Create Form</Header>
        <Button primary onClick={() => setQuestionModal(true)}>
          Add Question
        </Button>
      </div>
      <Form>
        <Form.Field>
          <label>Form name</label>
          <input
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
        </Form.Field>
        {questionList.length > 0 && (
          <Card fluid>
            {questionList.map((question, index) => (
              <Card.Content>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Card.Header>Question: {question.questionText}</Card.Header>
                  <Button
                    icon="delete"
                    onClick={() => handleDeleteQuestion(index)}
                  ></Button>
                </div>
                <Card.Meta>
                  <span className="date">
                    Question Type: {question.questionType}
                  </span>
                </Card.Meta>
                <Card.Description>
                  {question.options && (
                    <h5>{`${question.questionType} options`} </h5>
                  )}
                  {question.options &&
                    question.options
                      .split(",")
                      .map((option) => <List>{option}</List>)}
                </Card.Description>
              </Card.Content>
            ))}
          </Card>
        )}
        <Button
          type="submit"
          disabled={!formData.name.trim() || !questionList.length}
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Form>
      <QuestionModal
        questionModal={questionModal}
        setQuestionModal={setQuestionModal}
        setQuestionList={setQuestionList}
        questionList={questionList}
      />
    </>
  );
}
