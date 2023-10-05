import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";
import { fireEvent, render, screen } from "@testing-library/react";

const mockerdUserNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=> mockerdUserNavigate,
}))

describe('navbar tests', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Ulises',
            id: '1234'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Should show the username', () => {

        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>);

        // screen.debug();

        expect(screen.getByText('Ulises')).toBeTruthy(); 
    });

    test('Should call logout & navigate when the user click locgout', () => {


        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>);
    
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
    
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockerdUserNavigate).toHaveBeenCalledWith("/login", {"replace": true})
    
    });
})

