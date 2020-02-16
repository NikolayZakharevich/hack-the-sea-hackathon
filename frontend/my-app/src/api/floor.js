import Backend from "../tools/Backend";

export const getFloor = id => Backend.request('v1/floor/' + id, {}, );