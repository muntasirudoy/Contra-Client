import { createContext, useState, useEffect, useContext, useReducer } from "react";

export const  EventStore = createContext()

const initvalue ={
  backValue:""
}

const reducer =(state,action)=>{
  switch (action.type){

      case 'BACK_PAGE' :
       {
          let payload = action.payload
          console.log("yes work");
          return {...state,payload}
       }

      default :
         return state
  }
}


  export const EventContextProvider = (props)=>{
  const [ currentEvent, dispatchEvent] = useReducer(reducer, initvalue)
  const value = { currentEvent, dispatchEvent }
  return  <EventStore.Provider value={value}> {props.children} </EventStore.Provider>
  
  }
  
  



