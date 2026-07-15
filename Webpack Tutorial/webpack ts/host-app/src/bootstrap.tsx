import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

// React.lazy() ka use - ye batata hai "iska code ab load karo, jab zarurat pade"
const RemoteButton = React.lazy(() => import("remoteApp/Button"));

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: 40 }}>
      <h1>Ye Host App hai</h1>
      <p>Neeche wala button remote-app se aaya hai:</p>

      {/* Suspense ek "waiting room" hai - jab tak Button load ho raha hai,
          "Loading..." dikhega, crash nahi hoga */}
      <Suspense fallback={<div>Remote Button load ho raha hai...</div>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
}

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");

const root = createRoot(container);
root.render(<App />);