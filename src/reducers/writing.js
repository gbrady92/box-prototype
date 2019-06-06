const initialState = {
    text: '',
    postfix: null,
    startOffset: 0,
    startContainerPath: '0',
    endOffset: 0,
    endContainerPath: '0'
};

const writing = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TEXT': {
            return {
                ...state,
                text: action.text
            };
        }
        case 'UPDATE_SELECTION': {
            return {
                ...state,
                startOffset: action.startOffset,
                endOffset: action.endOffset
            };
        }
        case 'UPDATE_POSTFIX': {
            return {
                ...state,
                postfix: action.postfix
            };
        }
        case 'CLEAR_POSTFIX': {
            return {
                ...state,
                postfix: ""
            };
        }
        default: {
            return state;
        }
    }
}

export default writing;
