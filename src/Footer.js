import React from "react";

const Footer = () => (
  <footer
  class="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
  <div class="container p-6 text-neutral-800 dark:text-neutral-200">
    <div class="grid gap-4 lg:grid-cols-2">
      <div class="mb-6 md:mb-0">
        <h5 class="mb-2 font-medium uppercase">Footer text</h5>

        <p class="mb-4">
          Api creada para el grupo de trabajo 
        </p>
      </div>

      <div class="mb-6 md:mb-0">
        <h5 class="mb-2 font-medium uppercase">Footer text</h5>

        <p class="mb-4">
          Herramientas utlizadas:
          Javascript
          css
          Html
          React 
          Tailwind
        </p>
      </div>
    </div>
  </div>

  <div
    class="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <p
      class="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Jonnathan Sotelo Rodriguez</p
    >
  </div>
</footer>
);

export default Footer;
