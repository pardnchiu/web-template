import { viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@1.6.0/dist/PDMarkdownKit.module.js";
let pre;

document.addEventListener("DOMContentLoaded", async function () {

    await fetch('https://cdn.jsdelivr.net/npm/pdmarkdownkit@1.6.0/README.md')
    .then(response => response.text())
    .then(data => {
        pre = data;
    })
    .catch(error => {
        console.error(error);
    });

    let app = new PD({
        id: "app",
        next: _ => {           
            const dom_viewer = new viewer({ 
                emptyContent: pre, 
                sync: {
                    delay: 0
                },
                style: {
                    fill: 0
                }
            });

            "section.markdown".$._child([
                dom_viewer.body
            ]);

            dom_viewer.init();
        }
    })

});