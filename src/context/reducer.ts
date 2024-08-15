
/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
interface Action<T = string, P = any> {
  type: T;
  payload?: P;
}

// eslint-disable-next-line no-unused-vars
type Reducer<TState, TAction extends Action> = (state: TState, action: TAction) => TState;

const CustomContextReducer =  <TState, TAction extends Action>(
	initialState: TState,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
	reducer: Reducer<TState, TAction>
) => {
	return (state: TState = initialState, action: TAction): TState => {
		switch (action.type) {
			case 'change': {
				// Tratar ação conforme payload
				return {
					...state,
					value: action.payload,
				};
			}
			default: {
				throw Error('Unknown action: ' + action.type);
			}
		}
	};
};

export default CustomContextReducer;

