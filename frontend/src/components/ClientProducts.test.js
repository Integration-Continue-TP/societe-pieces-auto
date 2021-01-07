import React from 'react';
import { render, screen } from '@testing-library/react';
import ClientProducts from './ClientProducts';

describe('ClientProducts UTs', () => {

    beforeEach(() => {
        render(<ClientProducts />);
    });

    test('should create component', () => {
        expect(screen).toBeTruthy();
    });
});
