import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/'
import PhotoList from '../'

afterEach(cleanup)

describe('Photolist is rendering', () => {
    it('renders', () => {
        render(<PhotoList />);
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
});