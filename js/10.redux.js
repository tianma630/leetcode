function createStore(reducer) {

    function Store(reducer) {
        let state;
        let listeners = [];

        this.reducer = reducer;

        this.getState = function() {
            return state;
        }

        this.dispatch = function(action) {
            state = this.reducer(state, action);
            listeners.forEach(l => l.call(this));
        }

        this.subscribe = function(listener) {
            listeners.push(listener);
        }

        this.dispatch({});
    }

    return new Store(reducer);
}

function reducer(state, action) {
    console.log('action', action)
    if (action.type === 'add') {
        return Object.assign({}, state, {
            count: state.count + 1
        })
    } else {
        return {count: 0};
    }
} 

let store = createStore(reducer);
store.subscribe(function() {
    console.log(this.getState())
})

// console.log(store.getState());

store.dispatch({type: 'add'});

// console.log(store.getState());