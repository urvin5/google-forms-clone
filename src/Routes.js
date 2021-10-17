import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { Loader } from "semantic-ui-react";
import AppLayout from "./Components/AppLayout";
import ViewForm from "./Pages/view-form";
import FormList from "./Pages/form-list";
import CreateForm from "./Pages/create-form.jsx";

export function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path="/"
          component={() => (
            <AppLayout>
              <FormList />
            </AppLayout>
          )}
          exact
        />
        <Route
          path="/create"
          component={() => (
            <AppLayout>
              <CreateForm />
            </AppLayout>
          )}
          exact
        />
        <Route
          path="/view/:uuid"
          component={() => (
            <AppLayout>
              <ViewForm />
            </AppLayout>
          )}
          exact
        />
      </Switch>
    </Suspense>
  );
}
