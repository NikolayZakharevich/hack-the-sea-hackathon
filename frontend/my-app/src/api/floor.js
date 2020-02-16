import Backend from "../tools/Backend";

export const getFloor = id => Backend.request('v1/floor/' + id, {}, );
export const filterResults = (id, filters) => Backend.request('v1/floor/' + id, {filters});