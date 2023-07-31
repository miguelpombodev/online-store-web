export default function (plop) {
  // component generator
  plop.setGenerator("component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/components/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.tsx",
        templateFile: "templates/components/styles.ts.hbs",
      },
    ],
  });

  plop.setGenerator("page", {
    description: "application page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Type page name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}.tsx",
        templateFile: "templates/pages/page.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("interface", {
    description: "application model interface",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Type interface name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/models/{{pascalCase name}}/{{camelCase name}}.interface.ts",
        templateFile: "templates/models/model.interface.ts.hbs",
      },
    ],
  });
}
