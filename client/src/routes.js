import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App        from './components/app';
import PersonIndex from './components/person_components/person_index';
import PersonNew   from './components/person_components/person_new';
import PersonShow   from './components/person_components/person_show';
import PersonEdit   from './components/person_components/person_edit';

import CompanyIndex from './components/company_components/company_index';
import CompanyNew   from './components/company_components/company_new';
import CompanyShow   from './components/company_components/company_show';
import CompanyEdit   from './components/company_components/company_edit';



export default (
    <Route path='/' component={App} >
        <Route path="person" component={PersonIndex} />
        <Route path="person/new" component={PersonNew} />
        <Route path="person/:id" component={PersonShow} />
        <Route path="person/edit/:id" component={PersonEdit} />
        <Route path="company" component={CompanyIndex} />
        <Route path="company/new" component={CompanyNew} />
        <Route path="company/:id" component={CompanyShow} />
        <Route path="company/edit/:id" component={CompanyEdit} />
    </Route>
)


        // <Route path="person/:id" component={PersonShow} />
        // <Route path="person/edit/:id" component={PersonEdit}  />