import { TireActionTypes, TireAction} from '../actions/tiredata.action';


export interface ShoppingState {
  yearList:string[],
  modelList: string[],
  makeList: string[],
  trim:string[],
  loading: boolean,
  error: Error;
}


const initialState: ShoppingState = {
    yearList: [],
    modelList: [],
    makeList: [],
    trim:[],
  loading: false,
  error: undefined
};

export function TireReducer(state: ShoppingState = initialState, action: TireAction) {
  switch (action.type) {
    case TireActionTypes.LOAD_YEAR:
      return {
        ...state,
        loading: true
      }
    case TireActionTypes.LOAD_YEAR_SUCCESS:
      return {
        ...state,

        yearList: action.payload,
        loading: false
      }
    
    case TireActionTypes.LOAD_YEAR_FAILURE: 
      return {
        ...state,
        error: action.payload
      }
      case TireActionTypes.LOAD_MAKE:
        return {
          ...state,
          loading: true
        }
      case TireActionTypes.LOAD_MAKE_SUCCESS:
        return {
          ...state,
          makeList: action.payload,
          loading: false
        }
      
      case TireActionTypes.LOAD_MAKE_FAILURE: 
        return {
          ...state,
          error: action.payload
        }
      case TireActionTypes.LOAD_MODEL:
            return {
              ...state,
              loading: true
            }
      case TireActionTypes.LOAD_MODEL_SUCCESS:
            return {
              ...state,
              modelList: action.payload,
              loading: false
            }
          
      case TireActionTypes.LOAD_MODEL_FAILURE: 
            return {
              ...state,
              error: action.payload
            }
      case TireActionTypes.LOAD_TRIM:
            return {
                  ...state,
                  loading: true
             }
      case TireActionTypes.LOAD_TRIM_SUCCESS:
            return {
                  ...state,
                  trim: action.payload,
                  loading: false
                }
              
      case TireActionTypes.LOAD_TRIM_FAILURE: 
            return {
                  ...state,
                  error: action.payload
                }
  
    default:
      return state;
  }
}