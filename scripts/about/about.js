

export const showabout = async () => {
    const body = await fetch('../../routing/pages/about.html')
    const response = await body.text()
    document.getElementById("content").innerHTML = response
};

