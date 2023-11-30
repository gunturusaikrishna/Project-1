const parent = React.createElement("div",
{id:"parent"},
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"heading1"),
    React.createElement("h3",{},"heading3"),
])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);