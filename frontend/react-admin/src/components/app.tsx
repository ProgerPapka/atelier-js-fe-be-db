import React from 'react';
import '../styles/index.css';

export interface T {
    a?: number;
}

export class App extends React.PureComponent<T> {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h1>{this.props.a}</h1>
            </div>
        );
    }
}