

export const showabout = async () => {
    const header = document.createElement("h1");
    header.innerHTML = "this element is added by the ABOUT script";
    document.body.appendChild(header);

    const body = await fetch('../../routing/pages/about.html')
    const response = await body.text()
    document.getElementById("content").innerHTML = response
};

