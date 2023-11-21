import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app.js';
import Store from './store.js';
import { codeGenerator } from './utils.js';

const store = new Store({
  list: [
    {code: codeGenerator(), title: 'Название элемента', counter: 0},
    {code: codeGenerator(), title: 'Некий объект', counter: 0},
    {code: codeGenerator(), title: 'Заголовок', counter: 0},
    {code: codeGenerator(), title: 'Очень длинное название элемента из семи слов', counter: 0},
    {code: codeGenerator(), title: 'Запись', counter: 0},
    {code: codeGenerator(), title: 'Шестая запись', counter: 0},
    {code: codeGenerator(), title: 'Седьмая запись', counter: 0},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
