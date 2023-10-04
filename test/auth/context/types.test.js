import { types } from "../../../src/auth";

describe( 'types tests.js',()=> {

    test('should return these types', () => {
         expect(types).toEqual( { login:  '[Auth] Login', logout: '[Auth] Logout' })
    });
});