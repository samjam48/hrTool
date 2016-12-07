import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App        from './components/app';
import PersonIndex from './components/person_components/person_index';
import PersonNew   from './components/person_components/person_new';
import PersonShow   from './components/person_components/person_show';
import PersonEdit   from './components/person_components/person_edit';



export default (
    <Route path='/' component={App} >
        <IndexRoute component={PersonIndex} />
        <Route path="person/new" component={PersonNew}  />
    </Route>
)


        // <Route path="person/:id" component={PersonShow} />
        // <Route path="person/edit/:id" component={PersonEdit}  />