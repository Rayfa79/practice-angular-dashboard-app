# Project Notes

## Overview
Angular the complete guide 2024 edition: Task-App

## Table of Contents
- [Getting Started](#)
- [Adding New Components][(#)]
- [string interpolation](#string)
- [property binding](#propery)
- [using getters for computed value](#propery)
- [changing state of UI (old way- zone.js)](#propery)

- [changing the state of UI (new way: Signals)](#signals)
- [Defining Component Inputs](#meeting-notes)
- [Required and optional inputs](#meeting-notes)
- [Using Signal inputs instead of @Input](#meeting-notes)

## Notes: Section 2: Angular Essentials- Components, Templates, Services & More
- [Getting Started](#)
- [Adding New Components][(#)]
- [string interpolation](#string)
- [property binding](#propery)
- [using getters for computed value](#propery)
- [changing state of UI (old way- zone.js)](#propery)

- [changing the state of UI (new way: Signals)](#signals)
- [Defining Component Inputs](#meeting-notes)
- [Required and optional inputs](#meeting-notes)
- [Using Signal inputs instead of @Input](#meeting-notes)
- [How to emit your own events w/ @Output ](#meeting-notes)
- [More modern approach using output function](#meeting-notes)
- [Using Signal inputs instead of @Input](#meeting-notes)
- [38. Working w/potentially undefined values and union types](#meeting-notes)
- [39. Accepted OBJECTS as inputs and adding its type INLINE](#meeting-notes)
- [40. Adding objects TYPES as an type alias OR INTERFACE](#meeting-notes)
- [41. Outputting List Content @for(user of users){} MODERN WAY](#meeting-notes)
- [42. Ouputting Conditional Content](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)

## Getting Started
- Go to GitHub and create the name of your app: ________
- copy https from github and CLONE repo to GitHub
- In VS CODE save to:  coding-projects-github>practice-projects>angular-apps FOLDER
- Copy and Paste Max starter files into your project folder
- run npm install (will intall all max's dependencys and modules)
- create new app: ng new ____ (standalone components will automatically be created)
- To use older modules instead: ng new my-app --no-standalone
- create new components: ng g c ____
- if cloning repo: npm install (install modules, and dependencys)
- run server: ng serve
- [ ] Task 2
- [x] Completed task

## Adding New Components
- ng g c header
- import header into component where being used
- add to imports array
- Idea 2: Brief description

## String Interpolation
- a One-way Data-Binding technique that is used to transfer the data from a TypeScript - code to an HTML template (view)
- {{ selectedUser }}

## Property Binding
- Property binding moves a value in one direction, from a component's property into a target element property
- <img [src]= "property name goes here">
- DEFINE PROPERTY IN COMPONENT CLASS: @Input({required:true}) avatar!: string
- the avatar property has an Input() which makes it settable from the outside
- Input() has the required option which means it MUST be set from the outside
- will get error in IDE if forget to set required property

## Using Getters For Computed Value
- when using string interpolation or property binding we can compute the value to be displayed
- We do NOT want to do this in the template!
- Instead use a GETTER in the component class that will return the value
- Example: <img [src]= " 'assets/users/' + selectedUser. avatar">
- INSTEAD: in class add: 
- get imagePath() {
      return 'assets/users/' + this.avatar
 }
- and in template just add: <img [src]="imagePath" [alt]="name">

## Changing State of UI the old way
-  Task: you want to change name of button when clicking a button element
-  STEPS:
-  1. add click event to button: <button (click)="onClick()"> {{ avatar.name }}
-  2. add an onClick method to component class 
-  3. export class UserComponent {
        selectedUser = avatar.name
    onClick() {
        this.selectedUser = avatar.name[4]
    }
}
-  4. In template the avatar name will be changed upon click usine ZONE.js


## Signal
- IMPORT signal function from angular/core
- create signal value and store in property within class
- call set method on property when want to change properties value
- TO GET VALUE OF SIGNAL PROPETY IN THE TEMPLATE: when calling property add an elipisis
- TO GET COMPUTED VALUES: don't USE GETTERS:
-      a. import computer function from angular/core
-      b. create variable for prop you want computed
-           selectedUser = signal(value you want to change)
-      c. If you want a value in the template computed add this in component
           imagePath= computed( ()=> 'assets/users/' + this.selectedUser().avatar)
-      d. return computed value in function body
-      e. To change the value upon click event
-          1. in click event function you must SET the proprety to be changed
-          2. this.selectedUser.set( value you want to change to)
-      e. READ computed value in template by adding prop(w/out brackets)..add elipsis


## Defining component inputs ( Required and optional inputs)
- component class properties can be SET from the outside (parent component has the data)
- To do this inport INPUT
- Add @Input({required: true})avatar!: string
- The above avatar property will be settable from the outside now
- You can add an optional require: true property in the Input()this will through and error if not used in the template
- the exlamation point is used so an error will NOT be thrown (expects a string)
- Use typscript to tell Angular the data type to be expected
- if require property not added then the property will be optional in template


## Using Signal for inputs instead of @Input
- import input...not INPUT(this is a decorator and used w/old @Input())
- set property EQUAL to input().....avatar= input() ...this produces a Signal
- add the typescript generic type that will be expected: avatar = input<string>()
- you may also make the input REQUIRED: avatar = input.required<string>()
- you can set an INITAL value for the input: avatar = input('') (this sets as a string)
- in the COMPONENT CLASS where the signal is being set just set up the property like normal!
-  <app-user [avatar]="user" />
-  exports class AppCompoenent{
       user= DUMMY-Data
}
- In the TEMPLATE of the signal property you must call the signal property
-     <span>{{ avatar() }}
- Remember for computed values dont user getters rather computed!!!!
- imagePath = computed(()=> {
    return 'assets/users' + this.avatar()
})
- to execute image path in template: <img [src]= imagePath()>
- TIP: when using input signals they are read ONLY from in the component you may not use set() to change them like we can with regular SIGNALS
- TIP: this project will not use signals input instead @Input decorator!


### How to emit your own events w/ @Output 
- Task: we want to output data from one component to another when button clicked
- let app component know when a button is clicked in user template then output that data
- STEPS: 
- 1. We want to send(output) data to another comp. when a button is clicked
- 2. Create a property w/@Output decorator and set to new EventEmitter()
-    a. @Output() select = new EventEmitter<string>()
-    b. make sure to set it comp. class

- 3. Create a click event and set equal to a method (anyname)
-    a. we will now send the select eventEmitter when the button is clicked
-    b. <button (click)= "onSelectUser()>

- 4. Create a method that will use select property to emit a new value
-    1. Max said you do not have to pass in a value. test to see whats emitted then
-    2. Max passed a value into emit
-       b. in the comp. class create an @Input property called id that will be set from outside:   @Input({required: true}) id!: string
-       c. this is the value that we will emit to the parent component when clicked
-       d. this.select.emit(this.id)
- 5. In the parent component template: in the app-user set [id]="property value in parent  comp."
-      a. <app-user [id]="users[2].name" />
- 6. In parent component use eventBinding on @Output property to listen to custom event
-    a. <app-user (select)="add name of method that will receive event">
-    a. <app-user (select)="onSelect($event)"/>
-    b. create a method in parent comp. that will receive the eventEmitter data
-    c. onSelect(id: string) {

}
#### More modern approach using output function
- instead of using @Output() decorator use output() function
- inport output (lowercase)
- create a property where you want data outputted
- set equal to output()
-         select = output<string>().....behind hood include new Eventemitter
- Next, output the select event in the click event method
- onSelectUser() {
    select.emit(this.id)
}
- use eventBinding in appComp template as usual 
- <app-user (select)="onSelectUser($event)" />
- Person 2

#### 38. Working w/potentially undefined values and union types
- If a value is returned that could POSSIBLY be undefined you will get a runtime error
- In the terminal: ✘ [ERROR] NG2: Object is possibly 'undefined'. [plugin  angular-compiler]
- or in the template: "property name has no initialzer.......
- SOLUTION: add ? after property (tells typscript value will be string or undefined
-      exp: @Input() name?: string
-      exp: <app-header [name]="selectedUser?.name"> (if selected user then add value if 
-                                                      not add undefined)
-      exp: <app-header [name]="selectedUser ? selectedUser.name: '' ">
-      means if there is a selected user then return the name else return empty string
- You may also add an ! after propety or function to let know there will be a non 
-  undefined value
- ALTERNATIVE TO USING QUESTION MARK! using a UNION TYPE
-     exp: @Input() name: string | undefined
- TIP: remove required: true if theres a possibility of getting an undefined value!!!
-    exp: @Input(required: true) name!: string (! tells TS there will definitly be value
-                                                 returned)
-    exp: remove and add: @Input() name?: string or @Input() name: string | undefined;

#### 39. Accepted OBJECTS as inputs and adding its type INLINE
- You can accept an OBJECT as an input
- You must give each of the objects properties a TYPE
- @Input({required: true}) user!: {
    id: string;
    avatar: string;
    name: string
}
- Make sure to add ! to tell TS the object will DEFINITELY be defined
- make sure to adjust the properties in the template to use USER.name, ect
- TIP: its preferred to use an INTERFACE for the object type instead of inline!

#### 40. Adding objects TYPES as an type alias OR INTERFACE]
- In component BELOW IMPORTS add a type alias OR Interface for object types:
- TYPE ALIAS
- type User = {
    id: string;
    avatar: string;
    name: string
}
- INTERFACE
- interface User {
    id: string;
    avatar: string;
    name: string;
}
- To use in the class:
-    @Input({required: true}) user!: User

#### 41. Outputting List Content @for(user of users){} MODERN WAY
1. DYNAMICALLY outputting a list of content
2. MODERN WAY: @for( user of users (this is a property in the component)){add list you
                                               want dynamically added here}
3. You may also TRACK each list item using a property
-           exp: track user.id
-    @for(user of users; track user.id) {
        <li>
           <app-user [user]="user" (onSelect)="$event" />
        </li>  
}


#### 42- Outputting Conditional Content
- USE CASE: only render tasks component if there is a selectedUser: else add text
- use @if(conditional){elements you want rendered} optional else if or else clause
- example:  @if(selectedUser) {
        <app-tasks [name]="selectedUser.name"/>
}@else {
    <p id="fallback">Please Select a User
</p>}
- [ ] Action 2: Assigned to Person

#### 43- Legacy Angular: ngFor and ngIf
- ngFor and ngIf are STRUCTURAL DIRECTIVES
- TO USE: IMPORT into comp. where being used. also add to IMPORTS ARRAY in comp.
- SYNTAX: <li *ngFor = " let user of users">: add to element you want repeated!
- ngIf: Add w/in tag of element or component that you want conditional rendered.
- SYNTAX: <app-tasks *ngIf = "selectedUser; else fallback" [name]="selectedUser!.name">
- TO ADD ELSE CLAUSE: <ng-template #fallback> <p id="fallback">Select a user to see their tasks!</p> </ng-template>

#### 44 & 45: Adding a Task Component & Outputting User Specific Tasks
- Create task component and add INSIDE TASKS component:  ng g c tasks/task --skip-tests
- Add <app-task> to TASKS TEMPLATE
- Add dummy task data to Parent Tasks component. Will be an array of task objects
- GOAL: To display a single users tasks when a user is clicked. We will NEED THE USERS ID
- STEPS: 
- 1. In tasks component: GET users ID from the app component
- @Input({required:true}) id?: string
- Once we have that id we should FILTER the TASKS array and only RETURN an filtered TASKS array if the tasks.userId === this.id
- get selectedUserId() { this.tasks.filter(task) task.userId === this.id}
- NOW TO DISPLAY ONLY THE TASK THAT MATCHES THE ID
- 1. In app component template: in the <app-tasks [id]="getter method that finds http data id that matchs id (tasks)">. THIS GETS USER ID THAT IS CLICKED AND PASSES TO TASKS COMP.
- 2. YAY not the tasks component has the current id and can use its gettter method to ONLY return the task w/the id that matches the id from the app component
- 3. @for(task of (ADD NAME OF GETTER METHOD IN TASKS COMPONENT);  track task.id) { <li> <app-task /> </li>}
- [ ] Action 2: Assigned to Person

#### 46. Passing Task Data to <app-task> component thats made available in the for loop! And using that data in the task component
- In task template we want to output the task name, time, and summary
- So in task component add a @Input property that accepts ENTIRE task OBJECT from the outside and pulls out only the property needed
- FIRST create an interface or type object that will shape the expected data
- type Task = {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}
- or: interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}
- @Input({required: true}) task!: Task


- NEXT, in tasks component BIND this new task property (from task comp.) to the task OBJECT thats recieved from tasks component
- <ul>
     @for( task of seelctedUserTasks; track task.id) {
        <li>
           <app-task [task]="task" />
        </li>
     }
- You can now EXTRACT the needed properties in order to display that data in the TASK TEMPLATE!!!
- <h2>{{task.title}} </h2>
- <time>{{task.dueDate}} </time> ect

#### 47. Storing Data Models in separate files
- Outsource data interfaces and type definitions into a separate Model file
- Add this file in the FOLDER for the which the data model belongs
- CREATE: task.model.ts
- in the file create then EXPORT the interface
- IMPORT the model in the comp. where its being used: you may OPTIONALY add the word type in front of the User
- import { type User } from './user.model'

#### 48. Dynamic CSS Styling w/ Class Binding
- Goal: want to style the user button by conditionally adding a css class ONLY when the user is selected
- STEPS: In user.component.css: create a class called .active
-     button: hover,
-     button: active,
-     .active {
         background-color: #9965dd;
        color: black;
-      }
- CONDITIONALLY ADD .active CSS CLASS TO BUTTON(in user component template) ONLY IF USER SELECTED
- STEPS:
- 1. find out if user is selected: this information is stored in APP. COMPONENT"S selectedUserId?: string; property
- 2. In user component template we need this information! add: @Input({required: true}) selected!: boolean;
- 3. Now in APP.TEMPLATE where <app-user> is rendered add:
- 4.   <li *ngFor="let user of users">
        <app-user 
        [users]="user"
        [select]="user.id === selectedUserId" .......RETURN truthy if user id from users loop equals selectedUserId from app component!
        (select)="onSelectUser($event)"
        />
      
      </li>
- 5. If the above returns TRUTHY then we can use the select property value in the user comp. template to conditionlly add a css class
- 5. Within the button tag BIND the class then add a . to bind the class you want to conditionally add!
- 6. <button [class.active]=" to a true or fasle value that determines if call will be added >
-            <button [class.active]="select"> </button>
- 7. This will conditionally add that class to button if selected is true

#### 49. Deleting Tasks when the COMPLETED BUTTON in the task component is clicked
- 1. In the task template Add a click event to the completed button
-    <button (click)=onCompleteTask()> Complete </button>
- 2. In the Task Component: create an onCompleteTask method: 
- 3. We need to emit an event to the parent TASKS component
-         in the task component create: @Output() completed: new eventEmitter<string>()......this will emit some data to the parent container
- 4. What data should we emit to the parent container!?: We have a task property in task component. we want to send the task.id!!!!!
- 5. onCompleteTask() {
          this.complete.emit(this.task.id)
-       }
- 6. IN PARENT TASKS TEMPLATE:
-    <app-task [task] ="task" (completed)="onCompleteTask($event)">
- 7. IN TASKS COMPONENT: 
-           onCompletTask(id: string){
              this.tasks = this.tasks.filter((task)=> task.id !== id)
-         }

#### 50. Adding a new-task dialog that renders conditionally
- GOAL: create a new component Inside of the tasks folder called 
-       new task. When the add new task button in clicked within
-       the TASKS TEMPLATE then render a form that allows a user
-       to create a NEW TASK
- STEPS:
- 1. create new-task component: ng g c tasks/new-task --skip-tests
- 2. IMPORT new-task component in TASKS COMPONENT/add to imports array
- 3. ADD <app-new-task /> to TASKS TEMPLATE
- 4. In TASKS TEMP>: add <button (click)="onAddTask()">
- 5. In TASKS COMP. add: isDialogOpen = false;
- 6. In TASKS COMP: add 
-       onAddTask(){
            this.isDialogOpen = !isDialogOpen;
-            }
- 6. Conditionaly render in TASKS TEMPLATE within <app-new-task>
-    @if(isDialogOpen) { <app-new-task />}

#### 51. Closing the new-task dialog
- GOAL: Close the new-task dialog when a user clicks anywhere within
-       the dialog element or clicks the CLOSE button 
- STEPS: 
- 1. In New-Task Temp: add click events to BUTTON and DIALOG element
-    <button (click)="onClose()">, <dialog (click)="onClose()">
- 2. We need to OUTPUT an event to TASKS component to trigger the
-    isDialogOpen property to be set to FALSE
- 3. In NEW-TASK-COMPONENT: create a property to hold emitted event
-    @Output({required: true}) close! = new eventEmitter<void>();
- 4. In NEW-TASK-COMPONENT: add onClose() that emits event
-       onClose(){
            this.close.emit();
-         }
- TIP: this emits no DATA: just want to notify TASKS comp. that button 
-      was clicked so it can run a method that toggles isDialogAdded
- 5. In TASKS TEMPLATE: <app-new-task (close)="onAddClass()"/>

#### 52,54,55: Using Directives and Two-way Binding: Getting Form Input Values and ADDING them to TASKS array when from submitted
- Using the two-way binding via the directive [(ngModel)]: lets you listen to the input AND output the data
- Use Case: use on the <input [(ngModel)]="enteredName"> lets you grab user inputted data! Must bind to a prop. in component!
- STEPS:
- 1. REGISTER the ngModel in the component!
-     import {FormsModule} from '@angluar/forms'
-     imports: [FormsModule]
- 2.  Add ngModel to INPUT elements and BIND to a property in the component
-       <input [(ngModel)]="enteredName">
- 3.  Input values EVEN DATES output STRINGS: set property in component to an empty string
-          enteredName = ""
- 4. Prevent the default of sending form to SERVER when submit button clicked. THis will automatically be done w/ fromsModule imported
- 5. LISTEN for form submission and run own code via event binding
-        <form (ngSubmit)="onSubmit()">: DONT FORGET PARENTHESIS TO RUN CODE
- 6. Now add [(ngModel)]"create a property" to each
-    input element (we need to send this data to
-    the task component)
- 7. Send form submision TASK data to task component via @Output and an eventEmitter
-    @Output() add = new eventEmitter<>();
- 8. You must add the GENERIC data types being 
-    submitted.
- 9. Create a data INTERFACE in task> model folder
- 10. export interface newTaskData {
            title: string;
            summary: string;
            date: string;
-      }
- 11. IMPORT newTaskData into new-task-component and 
      add data model to @Output() add property
- 12. Emit add property in the onSubmit() method
-     onSubmit() {
          this.add.emit({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate
          })
-      }
-  13. We Want To Add a New Task to the tasks array. How do we get our data there?
-      a. Add eventBinding in TASK : to the <new-task-app (add)="onAddTask($event)">
       b. In TASK COMPONENT add onAddTask method (IMPORT newTaskData from TASK Model)
       c.     onAddNewTask(taskData: NewTaskData){
                    this.task.push({
                        id: ,
                        dueDate: taskData.date,
                        title: taskData.title,
                        summary: taskData.summary
                    })
                    this.isTaskAdded = false;
                    
              

#### 56. Content Projection via ng-content
- Use Case: want to share CSS styling amongst different components. Could add
  a global CSS style and share amongst components OR share using ng-content
- GOAL: create reusable card component to be used across components
        Use in user-component template to wrap BUTTONS
        Use in New-Task template to wrap articles
- STEPS for using ng-content
- 1. create a component in a SHARED folder in the app
     ng g c shared/card --skip-tests
- 2. in card templete add:
     <div>
        <ng-content>
     </div>
- 3. CUT div styles from user component css files and add to card css styles
       div {
          border-radius: 6px;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
       }
- 4. use CARD COMPONENT Selector AS A WRAPPER in components where u want to use styles
       <app-card>
        <button>Close</button>
        <img>
        <span>Hi</span>
       </app-card>
- 5. IMPORT the <app-card> component into EACH component its used in!!!!!
- 6. Content projection: to keep component markup ADD ng-content IN card TEMPLATE!
#### 57. Tranforming Template Data w/ pipes
- Use Case: In Task Component Template change dueDate to different format via
  built in Angular pipe
- STEPS:
- 1. IMPORT date pipe from Angular Common and add to imports array
     import {DatePipe} from '@angular/common'
- 2. Transfrom the date in Task Template
     <time>{{ task.dueDate | date:'fullDate' }} </time>
#### 58,59: Services
- 1. Keep Components and Templates LEAN: USE SERVICES to manage DATA!!!!
- 2. Create a task service
     ng g s tasks/task
- 2. MOVE TASKS array to the task service service mark it as private
     and use METHODS to get data
- 3. create the following methods: one to GET tasks by userId, ADD a new task which
     takes in taskData: newTaskData AND userID and DELETE tasks which takes in id
     We already have to method logic.
- 4. IMPORT task service to TASKS component
- 5. REGISTER  task service as INJECTABLE  and import (will auto when create using cli)
     - @Injectable({
       providedIn: 'root'
       })
- 5. INSTANTIATE CLASS TO USE SERVICE: 
     1. use DEPENDENCY INJECTION via the constuctor
        a.  constructor( private taskService: TaskService){}
    2. Use service in tasks methods to get data
        b. getSelectedUserTasks(){
             return this.taskService.getUserTasks(this.userId)
        }
#### 60. ALTERNATIVE WAY TO INSTANTIATE a SERVICE VIA INJECT() FUNCTION
- USE CASE: in newTask Component use a service to add a new task to the task array instead
            of the @Output add eventEmitter!!!!!!!! (remember service handles data!)
- 1. Use the inject() function instead of constructor function
     - IMPORT taskService into newTaskComponent
     - create a new property to store the service and insantiate w/ inject funciton
     - private taskService = inject(TaskService)
- 2. IN newTaskComponent GET RID OF @Output add  EVENTEMITTER AND USER SERVICE
     - onSubmit(){
        this.taskService.addTask({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate
        }),
        this.userId
     }
- 3. Will need to get userId from the outside using @Input
      - @Input({required: true}) userId!: string
      - in TASKS component get userId<app-new-task [userId]="userId">
      - Still use @Output eventEmmiter to close dialog
- 4. EMIT close eventemitter in onSubmit() AFTER calling taskService
     - this.close.emit()
#### 62. Using Local Storage to Store Tasks Array
- USE CASE: on page referesh  our tasks will be lost. Persist data to local storage
            When page refreshes FETCH tasks and UPDATE tasks when added or deleted
1. IN TASK SERVICE CONSTRUCTOR (will auto run on page refresh) on page load
   create variable called tasks that will save the tasks in local storage
   ----constructor()){const tasks = localStorage.getItem('task'}
2. Create conditional if tasks were found in local storage set tasks property to tasks
   variable if no tasks then use the tasks array in the TASKS COMPONENT
   ---if(tasks){
        this.tasks = JSON.parse(tasks)
      }
3. MUST parse tasks back to an ARRAY. items in localStorage will be in JSON string format
4. UPDATE tasks in local storage whenever SAVED or REMOVED
   - 1. CREATE PRIVATE FUNCTION that SAVES tasks to task KEY in local storage whenever
        removeTask() function or addTask() function is run
   - 2. private saveTasks(){
         localStorage.setItem('tasks', JSON.stringigy(this.tasks))
      }
   - 3. Add this function AFTER removeTask() function and addTask()function
        - this.saveTasks()
5. To see tasks in localStorage: devTools>applications>storage>localStorage>see task key!
#### 65. Standalone Components vs Modules
- WHATS THE DIFFERENCE BETWEEN STANDALONE COMP. AND MODULES?
- 1. there is NO APP MODULE: you do NOT define components w/in module
- 2. Single responsibility principle:  standalone flag which is all Angular needs to mark a component as a standalone components. The other being the imports array which is used to define the modules, services, pipes or components that the component will use
-  WHAT ARE THE PROS OF A STANDALONE VS MODULES
- 
-  WHAT ARE THE STEPS TO CREATING AND REGISTERING COMPONENTS IN THE APP. MODULE
-  1.  CREATING A NEW PROJECT W/MODULES (by DEFAULT angular uses standalone components)
      - ng new my-app --no-standalone
-  2. CREATING app.module FOR EXISTING PROJECT THAT USES STANDALONE 
      - ng generate module app --flat --module=app
      - generate module: Creates a new module
      - app: Names the module "AppModule"
      - --flat: Puts the file in src/app instead of its own folder
      - --module=app: Registers it in the imports array of the AppModule
-  3. CONVERTING STANDALONE COMPONENTS TO MODULES;
      - IN STANDALONE COMPONENT REMOVE: 
       - standalone: true...........or change to false
     - REMOVE imports array from the standalone component
     - IN APP.MODULE :
       - IMPORT the component
       - Add the component to the declarations array: declarations: [AppComponent]
       - IMPORT: import { BrowserModule } from '@angular/platform-browser';
       - ADD: BrowserModule to imports array: imports: [BrowserModule,FormsModule],
       - Add: bootstrap: [AppComponent]......to @ngModule decorator options object
     - UPDATE MAIN.TS - to bootstrap appComponent
       - import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
         import { AppModule } from './app/app.module';

        -platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
     - TO ADD STANDALONE COMPONENTS AND MODULES
       - ADD: the standalone component you want to use to the APP.MODULE IMPORTS ARRAY
           - imports: [HeaderComponent]....also IMPORT to imports
#### 71. CREATE AND USING SHARED MODULES 
- WHY WOULD YOU NEED A SHARED MODULE?
    - When components are SHARED throughout different FEATURES add to shared.module.ts
      w/in a SHARED FOLDER
- APP EXAMPLE OF SHARED MODULE
    - Add ALL COMPONENTS that would be shared across components to a SHARED FOLDER
    - Example: the CARD COMPONENT is shared amongst the User component and Tasks component
      so in the shared folder that has the card component CREATE a shared.module.ts
      and add the card component to it's declarations array
- HOW TO CREATE A SHARED MODULE VIA CLI and ADD COMPONENTS TO IT
   - 1. Create a new module called shared: ng generate module shared
   - 2. Next, you can generate components within this shared module:
        - ng generate component shared/components/add-component-name-here
   - 3. In the shared.module.ts file, import and declare your components
        TIP: Note the exports array - this is crucial for making your components available to other modules.
        - import { ComponentNameComponent } from './components/component-name/
        - @NgModule({
             declarations: [ComponentNameComponent],
             imports: [CommonModule],
             exports: [ComponentNameComponent]
           })
    - 4. In the app.module.ts REMOVE any components that are now added to shared.module.ts
    - 5. In the app.module.ts: in the imports array add the shared.module.ts
         - imports: [BrowserModule, FormsModule, SharedModule]
#### 51. Closing the new-task dialog
#### 51. Closing the new-task dialog
## Code Snippets
```python
# Example code snippet
def hello_world():
    print("Hello, World!")

[def]: #ideas