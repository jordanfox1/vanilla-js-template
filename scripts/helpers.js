export async function appendHtmlToBody(filePath) {
    const body = await fetch(filePath)
    const response = await body.text()
    document.getElementById("content").innerHTML = response
}

export function addElement(elementConfig, parentId) {
    const element = document.createElement(elementConfig.type);
    element.innerHTML = elementConfig.text;

    const parent = document.getElementById(parentId);
    parent.appendChild(element);
}