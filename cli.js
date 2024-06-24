#!/usr/bin/env node

const { Command } = require('commander');
const { exec } = require('child_process');
const program = new Command();

const components = ['button', 'card', 'modal']; // List of components

program
  .version('0.1.1')
  .description('MeloSpot UI CLI to install individual UI components');

program
  .command('install <component>')
  .description('Install a UI component')
  .action((component) => {
    if (!components.includes(component.toLowerCase())) {
      console.error(`Component "${component}" not found.`);
      return;
    }

    console.log(`Installing component: ${component}`);
    exec(`npm install @melospot-ui/${component.toLowerCase()}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error installing component: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
      }

      console.log(`Component ${component} installed successfully!`);
      console.log(stdout);
    });
  });

program.parse(process.argv);
