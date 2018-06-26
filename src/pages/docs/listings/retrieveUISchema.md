import * as React from 'react';
import * as _ from 'lodash';
import { composePaths,ControlElement, Resolve } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/react';

export const MyControl =
  ({ data, path, schema, onAdd, uischema, findUISchema }) => {

    const controlElement = uischema as ControlElement;
    const resolvedSchema = Resolve.schema(schema, `${controlElement.scope}/items`);

    return (
        <fieldset>
            <legend>My Control</legend>
            <div>
            {
                data ? _.range(0, data.length).map(index => {

                    const uischema = findUISchema(resolvedSchema, controlElement.scope, path);
                    const childPath = composePaths(path, `${index}`);

                    return (
                    <JsonForms
                        schema={resolvedSchema}
                        uischema={uischema}
                        path={childPath}
                        key={childPath}
                    />
                    );
                }) : <p>No data</p>
            }
            </div>
        </fieldset>
    );
  };