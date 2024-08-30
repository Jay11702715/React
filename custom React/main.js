function customrender(reactElement,container){
    var domelement = document.createElement(reactElement.type);
    domelement.innerHTML =reactElement.children;
for(const prop in reactElement.props ){
    domelement.setAttribute(prop, reactElement.props[prop])
}
container.appendChild(domelement)
}

const reactElement = {
    type: "a",
    props: {
        target: "_blank",
        href: "google.com"
    },
    children: "Anchor"
}

const maincontainer = document.getElementById("root") 

console.log(typeof (reactElement))
customrender(reactElement,maincontainer)

window.addEventListener('beforeunload', function (event) {
    // For most modern browsers, this is required to trigger the dialog
    event.preventDefault();
    event.returnValue = ''; // Setting this to an empty string triggers the dialog in modern browsers
});
