import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@SennheiserApp/sennheiser-single-spa-navbar",
  app: () => System.import("@SennheiserApp/sennheiser-single-spa-navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@SennheiserApp/sennheiser-single-spa-homepage",
  app: () => System.import("@SennheiserApp/sennheiser-single-spa-contactpage"),
  activeWhen: ["/contact"],
})

start({
  urlRerouteOnly: true,
});
