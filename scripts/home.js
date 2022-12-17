import { showabout } from "./about/about"

export const showhome = () => {
    const header = document.createElement('h1')
    header.innerHTML = "his element is added by the HOME script"
    document.body.appendChild(header)
}