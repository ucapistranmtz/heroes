
import { authReducer, types } from "../../../src/auth";


describe('Auth reducer tests', () => {

    test('should return the default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });

    });
    test('should rlogin  and stablish the user and set logged property on true', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Jesus',
                id: 11234
            }
        };

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, user: action.payload })
    });
    test('should logout  and remove user and set logged property on false', () => {
        const state = {
            logged: true,
            user: {
                id: 1234,
                name: 'Juan'
            }
        };
        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action)
        expect(newState).toEqual({ logged: false });


    });
});