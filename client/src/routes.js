import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App        from './components/app';
import PersonIndex from './components/person_components/person_index';
import PersonNew   from './components/person_components/person_new';
import PersonShow   from './components/person_components/person_show';
import PersonEdit   from './components/person_components/person_edit';

import CompanyIndex from './components/company_components/company_index';



export default (
    <Route path='/' component={App} >
        <Route path="person" component={PersonIndex} />
        <Route path="person/new" component={PersonNew}  />
        <Route path="company" component={CompanyIndex} />
    </Route>
)


        // <Route path="person/:id" component={PersonShow} />
        // <Route path="person/edit/:id" component={PersonEdit}  />