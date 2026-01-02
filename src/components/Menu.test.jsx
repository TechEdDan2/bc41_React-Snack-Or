import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Menu from './Menu';
import { BrowserRouter } from 'react-router-dom';

describe('Menu Component', () => {
    const snacks = [
        { id: '1', name: 'Chips' },
        { id: '2', name: 'Cookies' },
        { id: '3', name: 'Pretzels' }
    ];

    it('renders the menu with snack items', () => {
        render(
            <BrowserRouter>
                <Menu snacks={snacks} type="snacks" />
            </BrowserRouter>
        );
        snacks.forEach(snack => {
            expect(screen.getByText(snack.name)).toBeInTheDocument();
        });
    });

});