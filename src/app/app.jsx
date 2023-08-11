import * as React from 'react';
import { createRoot } from 'react-dom/client';


import Main from './main'

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {
    return (
        <div>
            <Main/>
        </div>
    )
}
root.render(<App/>);
