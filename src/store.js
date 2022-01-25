import {createStore} from "vuex";

// Create a new store instance.
const store = createStore({
    state () {
        return {
            tasks: [
                {
                    content: "My first task",
                    completed: false,
                }
            ],
            activeFilter: "All"
        }
    },
    mutations: {
        initialiseStore(state) {
            console.log("init");
            if (localStorage.getItem('tasks')) {
                state.tasks = JSON.parse(localStorage.getItem('tasks'));
            }
        },

        addTask (state, payload) {
            state.tasks = [...state.tasks, {content: payload, completed: false}];
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        completeTask (state, payload) {
            state.tasks[payload.taskIndex].completed = payload.completed;
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        setActiveFilter(state, payload) {
            state.activeFilter = payload;
        }
    }
});

export default store;