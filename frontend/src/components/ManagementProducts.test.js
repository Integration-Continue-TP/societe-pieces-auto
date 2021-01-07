import React from 'react';
import { render, screen } from '@testing-library/react';
import ManagementProducts from './ManagementProducts';

describe('ManagementProducts UTs', () => {

    beforeEach(() => {
        render(<ManagementProducts />);
    });

    test('should create component', () => {
        expect(screen).toBeTruthy();
    });
});
