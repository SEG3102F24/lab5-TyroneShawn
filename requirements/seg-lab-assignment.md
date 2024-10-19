Goals:
I currently have a project running on Angular 18. I would like to connect this application to a firestore project. Currently I have a component (employee.component.ts) where I would like to submit employees 
to a collection in firestore. In employees component(employees.component.ts) I would like to update this code to get the employees from the employees collection in firestore.

File Structure: 
lab5-TyroneShawn-master
    ├── README.md
    ├── angular.json
    ├── package-lock.json
    ├── package.json
    ├── scripts
    │   └── ascii-file.py
    ├── src
    │   ├── app
    │   │   ├── app.component.css
    │   │   ├── app.component.html
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.config.ts
    │   │   ├── app.routes.ts
    │   │   ├── employee
    │   │   │   ├── employee.component.css
    │   │   │   ├── employee.component.html
    │   │   │   ├── employee.component.spec.ts
    │   │   │   └── employee.component.ts
    │   │   ├── employees
    │   │   │   ├── employees.component.css
    │   │   │   ├── employees.component.html
    │   │   │   ├── employees.component.spec.ts
    │   │   │   └── employees.component.ts
    │   │   ├── model
    │   │   │   ├── employee.spec.ts
    │   │   │   └── employee.ts
    │   │   └── service
    │   │       ├── employee.service.spec.ts
    │   │       └── employee.service.ts
    │   ├── assets
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json