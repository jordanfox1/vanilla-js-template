import { showabout } from "./about/about"

export const showhome = () => {
    const header = document.createElement('h1')
    header.innerHTML = "HELLO home"
    document.body.appendChild(header)
}