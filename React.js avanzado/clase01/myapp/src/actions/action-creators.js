import * as tipos from "./action-types"

export function requestNews(query){
  return {
    type : tipos.REQUEST_NEWS,
    query : query
  }
}