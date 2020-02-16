import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'
import "typeface-comfortaa";

const router = createRouter()

router.start(() => {
    ReactDOM.render((
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    ), document.getElementById('root'))
});
