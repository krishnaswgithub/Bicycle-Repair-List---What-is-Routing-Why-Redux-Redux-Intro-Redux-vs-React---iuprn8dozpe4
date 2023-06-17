/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:

const reducer = (state = [],action = {}) => {

  switch(action.type){

    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;

    default: 
      return state;
    }
  
export default reducer;
*/

const initialState = {
  items: [],
  item: {
    id: 0,
    owner: '',
    model: '',
    description: '',
  },
  editMode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'repairAdded':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items.length + 1,
            owner: action.payload.owner,
            model: action.payload.model,
            description: action.payload.description,
            resolved: false,
          },
        ],
      };
    case 'repairRemoved':
      return {
        ...state,
        items: state.items.filter((repair) => repair.id !== action.payload.id),
      };
    case 'repairResolved':
      return {
        ...state,
        items: state.items.map((repair) =>
          repair.id === action.payload.id ? { ...repair, resolved: !repair.resolved } : repair
        ),
      };
    case 'repairUpdated':
      return {
        ...state,
        items: state.items.map((repair) =>
          repair.id === action.payload.id
            ? {
                ...repair,
                owner: action.payload.owner,
                model: action.payload.model,
                description: action.payload.description,
              }
            : repair
        ),
        item: {
          id: 0,
          owner: '',
          model: '',
          description: '',
        },
        editMode: false,
      };
    case 'editTask':
      return {
        ...state,
        item: {
          id: action.payload.id,
          owner: action.payload.owner,
          model: action.payload.model,
          description: action.payload.description,
        },
        editMode: true,
      };
    default:
      return state;
  }
};

export default reducer;
