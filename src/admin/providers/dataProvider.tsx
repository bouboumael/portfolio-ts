import simpleRestProvider from "ra-data-simple-rest";
// @ts-ignore
const apiRoot: string = process.env.REACT_APP_API_URL;
export const dataProvider = simpleRestProvider(apiRoot);
