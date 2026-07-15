// src/components/RemoteComponentWrapper.jsx

import React, { Suspense } from 'react';

const RemoteHeader = React.lazy(() => import('remote_app/Header'));
const RemoteButton = React.lazy(() => import('remote_app/Button'));



export default function Wrapper() {
    return (
        <div>
            <Suspense fallback={<div>Loading Header...</div>}>
                <RemoteHeader />
            </Suspense>

            <Suspense fallback={<div>Loading Button...</div>}>
                <RemoteButton  onClick={() => console.log('Clicked remote button!')}/>
            </Suspense>
           
        </div>
    );
}