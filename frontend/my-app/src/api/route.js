import Backend from "../tools/Backend";

export const getRoute = (from, to, without_stairs, without_elevator) => Backend.request('v1/route/', {from, to, without_elevator, without_stairs} );