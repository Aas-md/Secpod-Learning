import React from "react";

const RemoteButton = React.lazy(() =>
    import("remote/Button")
);

const RemoteHeader = React.lazy(() =>
    import("remote/Header")
);
export default function App() {
    return (
        <>
            <h1>host app updated</h1>
            <RemoteHeader />
            <RemoteButton/>
        </>
    )
}