module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/core/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.hbs'
      },
      {
        type: 'add',
        path: '../src/components/core/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/styles.hbs'
      },
      {
        type: 'add',
        path: '../src/components/core/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.hbs'
      },
      {
        type: 'add',
        path: '../src/components/core/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/component-test.hbs'
      }
    ]
  })
};
  