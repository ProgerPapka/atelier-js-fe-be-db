import {DbConnection} from './connection';

// TODO: read doc and implement test
describe('connection to mongo-db', () => {
    it('connection to mongo cloud', async () => {
        await DbConnection.connect();
    });
});
