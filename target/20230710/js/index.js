
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

    const page = location.href.$query("page") || "home";
    const app = new PD({
        id: "app",
        data: {
            page: page,
            nav_index: (_ => {
                if (page === "home") {
                    return 0
                }
                else if (page === "feature") {
                    return 1
                }
                else if (page === "service") {
                    return 2
                }
                else if (page === "pricing") {
                    return 3
                }
                else if (page === "blog" || page === "article") {
                    return 4
                }
                else if (page === "contact") {
                    return 5
                }
            })(),
            section_3: ["paintbrush", "brush", "pen-ruler", "cube"],
            section_4: ["paintbrush", "brush", "pen-ruler"],
            section_5: Array.from({ length: 4 }, (_, i) => i),
            section_6: [49, 99, 149],
            section_7: {
                list: [3, 0, 1, 2, 3, 0],
                indicator: [0, 1, 2, 3]
            },
            section_blog: Array.from({ length: 5 }, (_, i) => i),
            comments: ["Emma Johnson", "William Davis", "Ava Thompson", "Daniel Brown"],
        },
        event: {
            tabShow: function () {
                const isShow = this.$pre(0).$$class("show");
                isShow ? this.$pre(0).class_("show") : this.$pre(0)._class("show");
            },
            section7Click: function (e) {
                this.$parent(1)._attr({ index: e.target.dataset.index });
            }
        },
        next: _ => {

            if (page == "article") {
                const elm_viewer = new viewer({
                    emptyContent: pre,
                    sync: {
                        delay: 0
                    },
                    style: {
                        fill: 0
                    }
                });

                setTimeout(_ => {
                    "section.md".$._child([
                        elm_viewer.body
                    ]);
                    elm_viewer.init();
                }, 500)
            }
        }
    })
});