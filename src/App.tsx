import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import './Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';

import 'jquery/dist/jquery.js';
import 'datatables.net-bs5/js/dataTables.bootstrap5.js';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import RetailOwner from './pages/RetailOwner';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter basename={'/smart-desk'}>
      <IonRouterOutlet>
        <Route exact path="/dashboard">
          <Sidebar page="dashboard" />
          <Dashboard/>
        </Route>
        <Route exact path="/retail-owner">
          <Sidebar page="retail-owner"/>
          <RetailOwner/>
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
