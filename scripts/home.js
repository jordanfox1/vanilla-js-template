import { showabout } from "./about/about"

export const showhome = async () => {
    const header = document.createElement('h1')
    header.innerHTML = "his element is added by the HOME script"
    document.body.appendChild(header)

    const body = await fetch('../../routing/pages/home.html')
    const response = await body.text()
    document.getElementById("content").innerHTML = response
}