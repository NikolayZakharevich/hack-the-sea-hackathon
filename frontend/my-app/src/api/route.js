import Backend from "../tools/Backend";

export const getRoute = (from, to) => Backend.request('v1/route/', {from, to} );