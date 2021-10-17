import React from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import _ from "lodash";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteForm } from "../Redux/actions";
export function FormListCard({ formList }) {
  const dispatch = useDispatch();

  function handleFormDelete(data) {
    dispatch(deleteForm(data));
  }

  return (
    <>
      {formList?.map((form) => (
        <Card fluid key={form.formSlug}>
          <Card.Content>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card.Header>{_.startCase(form.formName)}</Card.Header>
              <div>
                <Button
                  icon="delete"
                  onClick={() => handleFormDelete(form.formSlug)}
                />
                <Button
                  as={Link}
                  to={`/view/${form.formSlug}`}
                  icon="linkify"
                />
              </div>
            </div>
            <Card.Meta>
              <span className="date">
                Total questions : {moment(form.createdAt).format("MMM Do YY")}
              </span>
            </Card.Meta>
            <Card.Description>
              Total questions : {form.questionList?.length}
            </Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>
      ))}
    </>
  );
}
