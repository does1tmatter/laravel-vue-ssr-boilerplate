import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { renderToString } from "@vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
import { useInertiaRoutes } from "inertia-routes";
import Layout from './App.vue'

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => {
            const pages = import.meta.glob("./pages/**/*.vue", { eager: true });
            let page = pages[`./pages/${name}.vue`]
            page.default.layout = page.default.layout || Layout
            return page
        },
        setup({ App, props, plugin }) {
            const routes = useInertiaRoutes(props);

            return createSSRApp({
                render: () => h(App, props),
            })
                .use(plugin)
                .use(routes);
        },
    })
);
