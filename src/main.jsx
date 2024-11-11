import {createRoot} from 'react-dom/client';
import { App } from '../components/App.jsx';

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);
//root.render(<Cart/>);
//root.render(<Eshop/>);
//root.render(<Error/>);
//root.render(<Loading/>);
//root.render(<Product/>);