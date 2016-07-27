
function callAPIMiddleware({ dispatch, getState}) {
    return next => action => {
        const {
            types,
            callAPI,
            shouldCallAPI = () => true,
            subreddit = {}
        } = action;

        if (!types) {
            // 普通 action：传递
            return next(action);
        }

        if (
            !Array.isArray(types) ||
            types.length !== 3 ||
            !types.every(type => typeof type === 'string')
        ) {
            throw new Error('Expected an array of three string types.');
        }

        if (typeof callAPI !== 'function') {
            throw new Error('Expected fetch to be a function.');
        }

        if (!shouldCallAPI(getState())) {
            return;
        }

        const [requestType, successType, failureType] = types;

        dispatch(Object.assign({}, subreddit, {
            type: requestType
        }));

        return callAPI().then(
            response => response.json()).then(json =>
                dispatch(Object.assign({}, subreddit, {
                    posts: json.data.children.map(child => child.data),
                    receivedAt: Date.now(),
                    type: successType
                })),
            error => dispatch(Object.assign({}, subreddit, {
                errorMessage: "出错啦.",
                type: failureType
            }))
            )
    }
}

export default callAPIMiddleware