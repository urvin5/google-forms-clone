import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { Loader } from "semantic-ui-react";
import AppLayout from "./Components/AppLayout";
const FormList = React.lazy(() => import("./Pages/form-list"));
const CreateForm = React.lazy(() => import("./Pages/create-form"));

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
      </Switch>
    </Suspense>
  );
}
