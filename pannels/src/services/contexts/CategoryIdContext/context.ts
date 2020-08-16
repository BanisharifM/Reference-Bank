
import {createContext, useContext} from 'react'
const initialId = 0
export const categoryIdContext = createContext(0)

export const useCategoyId =()=> useContext(categoryIdContext)
