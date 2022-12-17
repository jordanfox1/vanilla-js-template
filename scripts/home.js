import { appendHtmlToBody, addElement } from "./helpers"

export const showhome = async () => {
    // globals 
    const pageName = 'Home' 


    // set up page body
    await appendHtmlToBody('../../routing/pages/home.html')
    addElement({type: 'h1', text: `hello and welcome to the ${pageName} page --- from js`}, 'content');
}