import { connect } from 'mongoose';
import { replace } from 'lodash';
import * as connectionConfig from './connection-config.json';

const getUrlConnection = () => {
    const urlWithLogin = replace(connectionConfig.url, '<login>', connectionConfig.login);
    return replace(urlWithLogin, '<password>', connectionConfig.password);
};

class MongooseConnection {

    public async connect() {
        try {
            await connect(connectionConfig.url, {
                user: connectionConfig.login,
                pass: connectionConfig.password
            });
            console.log('Database connection successful');
        } catch (error) {
            console.error(`Database connection error: ${error}`);
        }
    }

}

export const DbConnection = new MongooseConnection();
