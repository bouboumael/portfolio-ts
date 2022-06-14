import React from 'react';
import {Admin} from "react-admin";
import {dataProvider} from "./providers/dataProvider";
import {authProvider} from "./providers/authProvider";

const AdminApp = () => {

    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider}>

        </Admin>
    )
}

export default AdminApp;
