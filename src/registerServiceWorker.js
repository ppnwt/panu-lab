import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    //...
    // When the SW is updated we will dispatch an event we can listen to in our .vue file
    updated(registration) {
      console.log("New content is available; please refresh.");
      document.dispatchEvent(
        new CustomEvent("swUpdated", { detail: registration })
      );
    },
    //...
  });
}
