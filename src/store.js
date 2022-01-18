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
        addTask (state, payload) {

            state.tasks = [...state.tasks, {content: payload, completed: false}];
        },
        completeTask (state, payload) {
            state.tasks[payload.taskIndex].completed = payload.completed;
        }
    }
});

export default store;