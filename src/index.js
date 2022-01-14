import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider} from '@speechly/react-client';

import App from './App';
import './index.css';
import { Provider } from './context/context';

ReactDOM.render(
                <SpeechProvider appId="5c39f56c-c791-4ae7-bf69-b7c8679d1b11" language="en-US">
                    <Provider>
                        <App />
                    </Provider>
                </SpeechProvider>,
 document.getElementById('root')
 );