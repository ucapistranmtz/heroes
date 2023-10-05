import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('AppRouter tests', () => {
    test('should show the login if the user is not authorized', () => {

        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter  />
                </AuthContext.Provider>
            </MemoryRouter>
        );

     
         expect(screen.getAllByText('Login').length).toBe(2);
    });


    test('should show the Marvel component if the user is authorized', () => {

        const contextValue = {
            logged: true,
            user:{
                id:'12321321',
                name:"Leo"
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter  />
                </AuthContext.Provider>
            </MemoryRouter>
        );

     
         expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    })

});