/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./project/app/View/Layouts/default.ctp",
    "./project/app/View/Elements/menu/*.ctp",
    "./project/app/View/Elements/structure/*.ctp",
    "./project/app/View/Elements/newsstudios/VIEW_*.ctp",
    "./project/app/View/Elements/content/*.ctp",
    "./project/app/View/Newsstudios/view.ctp",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
