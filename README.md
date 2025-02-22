Cypress application open : npx cypress open

Cypress test case run in terminal : headless mode :
1. npx cypress run
2. It will be run all the specification file (.cy.js) comming under that folder
3. Run a specific file : npx cypress run --spec Copy_Relative_Path.cy.js


Cypress test case run in terminal and application UI (both) : headed mode :
1. npx cypress run --headed

2. It will be run all the specification file (.cy.js) comming under that folder

3. Run a specific file : npx cypress run --spec Copy_Relative_Path.cy.js --headed

4. Run in specific browser: npx cypress run --spec Copy_Relative_Path.cy.js --browser chrome --headed

5. Stop automatic browser closing: npx cypress run --spec Copy_Relative_Path.cy.js --browser chrome --headed --no-exit
