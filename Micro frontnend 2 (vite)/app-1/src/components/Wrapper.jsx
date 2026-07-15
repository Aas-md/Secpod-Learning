import React from 'react';
import { Suspense } from 'react';
const RemoteHeading = React.lazy(() => import('remote_app/Heading'));
const RemoteButton = React.lazy(() => import('remote_app/Button'));

export default function Wrapper() {

    return (
        <>
            <Suspense fallback={<div>Loading Heading...</div>}>
                <RemoteHeading text="This is not bad" />
            </Suspense>
            <Suspense fallback={<div>Loading Button...</div>}>
                <RemoteButton callBack={() => console.log("Button has been clicked")} />
            </Suspense>
        </>
    )
}