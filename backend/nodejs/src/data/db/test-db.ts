import { forEach } from 'lodash';
import { User } from '../model';

const testDbUsers = [
    {
        email: 'test1@test.ru',
        id: 1,
        name: 'Test1',
        password: '123',
        surname: 'Qwerty1'
    },
    {
        email: 'test2@test.ru',
        id: 2,
        name: 'Test2',
        password: '123',
        surname: 'Qwerty2'
    },
    {
        email: 'test3@test.ru',
        id: 3,
        name: 'Test3',
        password: '123',
        surname: 'Qwerty3'
    },
];

export const users = new Array<User>();

forEach(testDbUsers, (item) => {
    users.push(new User(item));
});

console.log(users);
