import React from "react";
const RemoteTodo = React.lazy(() => import("remoteApp/Todo"));

export default function App() {

    return (
        <>
            <h1>Host App</h1>
            <RemoteTodo/>
        </>
    )
}