import React from "react";
import ReactDOM from "react-dom/client";

export default function Helloworld() {
    return <div>A new Laravel React Project started</div>;
}

const container = document.getElementById("myapp");
const root = ReactDOM.createRoot(container);
root.render(<Helloworld />);
