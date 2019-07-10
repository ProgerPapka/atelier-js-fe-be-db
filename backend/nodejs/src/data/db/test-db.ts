import { User } from '../model';

export const users = new Array<User>();

users.push(new User({
    email: 'test@test',
    id: 1,
    name: 'test',
    password: '123',
    surname: 'test'
}));
