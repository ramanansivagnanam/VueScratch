import { createStore } from 'vuex'
import dummyCon from "../assets/dummy";


export const store = createStore({
  state () {
    return {
       dummyCon
    }
  }
})