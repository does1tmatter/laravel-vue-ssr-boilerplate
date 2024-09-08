import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { useInertiaRoutes } from "inertia-routes";
import Layout from './App.vue'

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.vue", { eager: true });
        let page = pages[`./pages/${name}.vue`]
        page.default.layout = page.default.layout || Layout
        return page
    },
    setup({ el, App, props, plugin }) {
        const routes = useInertiaRoutes(props);

        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(routes)
            .mount(el);
    },
});
