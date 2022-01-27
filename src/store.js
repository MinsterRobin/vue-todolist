import {createStore} from "vuex";
import {v4 as uuidv4} from "uuid";

// Create a new store instance.
const store = createStore({
    state () {
        return {
            tasks: [
                {
                    _id: 0,
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
            state.tasks = [...state.tasks, {_id:uuidv4(), content: payload, completed: false}];
            console.log(state.tasks);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        completeTask (state, payload) {
            let taskIndex = state.tasks.findIndex(task => task._id === payload.taskId);

            if(taskIndex === -1) {
                console.log("Couldn't update task");
            } else {
                state.tasks[taskIndex].completed = payload.completed;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        deleteTask (state, payload) {
            state.tasks = state.tasks.filter(task => task._id !== payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteAllTasks (state) {
            state.tasks = state.tasks.filter(task => task.completed === false);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },

        setActiveFilter(state, payload) {
            state.activeFilter = payload;
        }
    }
});

export default store;