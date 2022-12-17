import { appendHtmlToBody, addElement } from "../helpers"

export const showabout = async () => {
    // globals 
    const pageName = 'About' 


    // set up page body
    await appendHtmlToBody('../../routing/pages/about.html')
    addElement({type: 'h1', text: `hello and welcome to the ${pageName} page --- from js`}, 'content');
}

