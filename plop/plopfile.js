export default function (plop) {
  // Allow to use {{cwd}} as the current directory
  // https://github.com/plopjs/plop/issues/68
  plop.addHelper("cwd", (p) => process.cwd());

  plop.setGenerator("component", {
    description: "React component using Typescript",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "{{cwd}}/{{name}}",
        templateFiles: "templates/component/*.hbs",
        base: "templates/component",
      },
    ],
  });
}
