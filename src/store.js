import {createStore} from "vuex";

// Create a new store instance.
const store = createStore({
    state () {
        return {
            tasks: [
                {
                    content: "Do something",
                    completed: false,
                }
            ]
        }
    },
    mutations: {
        addTask (state) {
            state.count++
        }
    }
});

export default store;