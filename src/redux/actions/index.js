/**
 * Action Types
 */

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

/**
 * Action Creators
 * (functions that return your action type)
 */

export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });
