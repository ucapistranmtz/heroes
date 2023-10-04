

import {  render,screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('public route tests', () => {
    test('should show the children if not authenticate', () => {

        const contexValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contexValue}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        ); 

        expect(screen.getByText('Public Route')).toBeTruthy();

    });
});