import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanages from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/orphanage/create" component={CreateOrphanage} />
            <Route path="/orphanage/:id" component={Orphanages} />
        </BrowserRouter>
    );
}

export default Routes;