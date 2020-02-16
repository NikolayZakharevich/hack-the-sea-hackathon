import Backend from "../tools/Backend";

export const getFloor = id => Backend.request('v1/floor/' + id, {}, );
export const getCabinet = id => Backend.request('v1/cabinet/' + id, {}, );