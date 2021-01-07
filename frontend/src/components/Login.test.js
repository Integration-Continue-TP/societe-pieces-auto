import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login UTs', () => {

    beforeEach(() => {
        render(<Login />);
    });

    test('should create component', () => {
        expect(screen).toBeTruthy();
    });

    test('should return form component', () => {
        const emailInput = screen.getByPlaceholderText(/Adresse mail/i);
        expect(emailInput).toBeInTheDocument();

        const passwordOnput = screen.getByPlaceholderText(/Mot de passe/i);
        expect(passwordOnput).toBeInTheDocument();
    });
});
