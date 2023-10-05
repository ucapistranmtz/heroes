

import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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

    test('should be able to browse if the user is authenticated', () => {

        const contexValue = {
            logged: true,
            user: {
                name: 'Jesus',
                id: 'ABCD123'
            }
        }

        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Marvel Page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();

        expect(screen.getByText('Marvel Page')).toBeTruthy();
    })
});