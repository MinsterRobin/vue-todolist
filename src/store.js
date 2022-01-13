import {createStore} from "vuex";

// Create a new store instance.
const store = createStore({
    state () {
        return {
            tasks: [
                {
                    content: "tâche 1",
                    completed: false,
                },
                {
                    content: "tâche 2",
                    completed: true,
                },
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