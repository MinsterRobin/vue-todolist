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
        addTask (state, payload) {
            state.tasks = [...state.tasks, {content: payload, completed: false}];
        },
        completeTask (state, payload) {
            state.tasks[payload.taskIndex].completed = payload.completed;
        },
        setActiveFilter(state, payload) {
            state.activeFilter = payload;
        },
        // getFilteredTasks(state, payload) {
        //     switch (payload) {
        //         case "All":
        //             return state.tasks;
        //         case "Active":
        //             return state.tasks.filter(task => task.completed === false);
        //         case "Completed":
        //             return state.tasks.filter(task => task.completed === true);
        //         default:
        //             return state.tasks;
        //     }
        // }

    }
});

export default store;