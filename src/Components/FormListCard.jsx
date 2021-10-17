import React from "react";
import { Card, Icon } from "semantic-ui-react";
import _ from "lodash";
import { Link } from "react-router-dom";
import moment from "moment";
export function FormListCard({ formList }) {
  return (
    <>
      {formList?.map((form) => (
        <Card fluid key={form.formSlug}>
          <Card.Content>
            <Card.Header>{_.startCase(form.formName)}</Card.Header>
            <Card.Meta>
              <span className="date">
                Total questions : {moment(form.createdAt).format("MMM Do YY")}
              </span>
            </Card.Meta>
            <Card.Description>
              Total questions : {form.questionList?.length}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/view/${form.formSlug}`}>
              <Icon name="linkify" />
            </Link>
          </Card.Content>
        </Card>
      ))}
    </>
  );
}
