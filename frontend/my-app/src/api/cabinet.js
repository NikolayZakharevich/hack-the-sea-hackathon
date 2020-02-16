import Backend from "../tools/Backend";

export const getCabinet = id => Backend.request('v1/cabinet/' + id, {}, );