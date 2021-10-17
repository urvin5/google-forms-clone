import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Input, Modal } from "semantic-ui-react";

export function QuestionModal({
  questionModal,
  setQuestionModal,
  setQuestionList,
  questionList,
}) {
  const [optionsField, setOptionsField] = useState(false);

  const intialData = {
    questionText: "",
    questionType: "text",
    options: "",
  };
  const [formData, setFormData] = useState(intialData);

  useEffect(() => {
    if (formData.questionType !== "text") {
      setOptionsField(true);
    } else {
      setOptionsField(false);
    }
  }, [formData]);

  function handleQuestionSubmit() {
    setQuestionModal(false);
    setQuestionList([formData, ...questionList]);
  }

  return (
    <Modal
      onClose={() => setQuestionModal(false)}
      onOpen={() => setQuestionModal(true)}
      open={questionModal}
      size="small"
    >
      <Modal.Header>Add new question</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Question text</label>
              <Input
                placeholder="Enter your question"
                value={formData.questionText}
                onChange={(e, { value }) =>
                  setFormData({
                    ...formData,
                    questionText: value,
                  })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Select question type</label>
              <Dropdown
                placeholder="Question type"
                fluid
                selection
                onChange={(e, { value }) => {
                  setFormData({ ...formData, questionType: value });
                }}
                defaultValue="text"
                options={[
                  { text: "Text", value: "text", key: "1" },
                  { text: "Radio", value: "radio", key: "2" },
                  { text: "Checkbox", value: "checkbox", key: "3" },
                ]}
              />
            </Form.Field>
            {optionsField && (
              <Form.Field>
                <label>Options</label>
                <Input
                  placeholder="Options could be seperated by commas(,)"
                  value={formData.options}
                  onChange={(e, { value }) =>
                    setFormData({ ...formData, options: value })
                  }
                />
              </Form.Field>
            )}
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setQuestionModal(false)}>
          Close
        </Button>
        <Button
          content="Add question"
          positive
          onClick={() => handleQuestionSubmit()}
        />
      </Modal.Actions>
    </Modal>
  );
}
