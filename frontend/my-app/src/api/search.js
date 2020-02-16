import Backend from "../tools/Backend";

export const search = query => Backend.request('v1/search', {query});