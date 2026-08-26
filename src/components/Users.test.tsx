import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { Users } from './Users';
import { getUsers } from '../services/useUser';

vi.mock('../services/useUser');

afterEach(() => {
    cleanup();
});

const usersMock = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'leanne@example.com',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Test company',
            bs: 'test',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'ervin@example.com',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Another company',
            bs: 'test',
        },
    },
];

describe('Users', () => {
    test('exibe os usuários após carregar a API', async () => {
        vi.mocked(getUsers).mockResolvedValue(usersMock);

        render(<Users />);

        expect(screen.getByText('Carregando...')).toBeInTheDocument();

        expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();

        expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    });

    test('filtra usuários pela busca', async () => {
        vi.mocked(getUsers).mockResolvedValue(usersMock);

        render(<Users />);

        await screen.findByText('Leanne Graham');

        const input = screen.getByPlaceholderText('Procure um usuário...');

        await userEvent.type(input, 'Leanne');

        expect(screen.getByText('Leanne Graham')).toBeInTheDocument();

        expect(screen.queryByText('Ervin Howell')).not.toBeInTheDocument();
    });

    test('exibe uma mensagem quando a API falha', async () => {
        vi.mocked(getUsers).mockRejectedValue(new Error('Erro ao carregar usuários'));

        render(<Users />);

        expect(await screen.findByText('Erro ao carregar usuários')).toBeInTheDocument();
    });
});
