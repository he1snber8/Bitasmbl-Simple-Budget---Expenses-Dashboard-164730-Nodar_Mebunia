import React from 'react';
import { createRoot } from 'react-dom/client';
import ReduxProvider from './providers/ReduxProvider';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ReduxProvider />);