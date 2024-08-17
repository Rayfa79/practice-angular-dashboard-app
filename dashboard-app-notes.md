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
- Header: ng g c header --skip-tests
- Create a Dashboard Folder w/each dashboard item component inside
  - server-status component, tickets component and traffic component
- IMPORT and add EACH component to app.component.ts imports array
- Create a new-ticket component in TICKETS folder (this will be the support tickets form!)
- 

## 104 Creating a ReUsable dashboard-item component & using Content Projection
- server-status, tickets, and traffic component template have REPETIVE CODE
- CREATE a dashboard-item component in DASHBOARD FOLDER
- COPY redundant markup to dashboard item from one component
- To make header img and h2 TEXT DYNAMIC MUST USE property binding w/in selector
  - <div id="dashboard">
    <app-dashboard-item
      [image]="{src: 'status.png', alt: 'a status symbol'}"
      title = "a signal symbol">
      <app-server-status />
    </app-dashboard-item>
- MAKE SURE to IMPORT dashboard-item to app.component
- In dashboard-item.html make sure to ADD <ng-content/> after header to keep
  component specific code in the output
  -<div class="dashboard-item">
  <article>
    <header>
      <img [src]="image.src" [alt]="image.alt" />
      <h2>{{title}}</h2>
    </header>
   <ng-content></ng-content>
  </article>
</div>

## 105: reating a ReUsable button component & using Content Projection

- The new-ticket template and header template have the SAME HTML button element code
- FIX: we will use this code in multiple components
    1. Create a shared folder in app folder
    2. ADD BUTTON component to shared folder
    3. Add the following code to button.html: Leave the button element in components where reusable button is used
       - <span> Logout </span>
         <span class="icon"> arrow icon </span> 
    3. We will EXTEND the builT in button element via attribute selectors
    4. We will not WRAP other components code w/ <app-button >
    5. in button component SELECTOR property add: 
       - selector: 'button[appButton]' (add this attribute selector to extend button)
    6. IMPORT BUTTON COMPONENT w/in each component where it is used!!!!!
    7. In each component template that that uses this reusable button class  add
       - <li> 
           <button appButton></button>
         </li>
## 106 Getting Dynamic Data for reusable button LOGOUT TEXT and aarow icon
- There are two ways to dynamically add this data

- WAY ONE: set from outside via @Input({required: true}) variable!: string / or /variable = input.required<string>() (function way). Set one input for Logout and one for the arrow icon

- WAY TWO: 
   - add <ng-content> placeholders in reusable button component: button.html: 
            <span>
              <ng-conent />
            </span>
            <span class=".icon"> <ng-conent /> </span>

   - How to use more then one <ng-content/> in reusable component to select DIFFERENT pieces of wrapped content and OUTPUT them in diffent places in component templates
         - How do we do this? and where?
           a. In the button.html.   We add a CSS SELECTOR to one of the <ng-content/> by using select = " CSS SELECTOR GOES HERE"
              <span>
                <ng-content/>
            </span>
            <span > 
                <ng-content select=".icon">
            </span>
    - In components where you want to use reusable button (new-ticket and header) component ADD the CSS CLASS SELECTOR .icon WHERE THAT <ng-content/> should be rendered (wrap with span just like in reusable component html)
          <button appButton>
            Logout (this is data that will be rendered)
            <span class="icon"> arrow gif goes here </span>
          </button>


## 108. Multi Element Custom Components & Content Projection
- Use Case: create ANOTHER reusable component for the repetitve markup in the 
  new-ticket components form element markup below. This is used TWICE
  - <p>
      <label>Title</label>
      <input name="title" id="title">
    </p>
  - ng g c shared/control --skip-content
  - Each Component will have different content for the lable and inputs data
  - TWO WAYS TO DYNAMICALLY ADD DATA: using Input, OR <ng-content>we will use BOTH
    1. for label data: USE INPUT FUNCTION and STRING INTERPOLATION
       - label = input.required<string>();
       - <label> {{ label() }} <label>
    2. for INPUT use <ng-content>
       - DYNAMIC INPUTS MAY USE: TEXTAREA, INPUTS, DATE TYPES, DROPDOWNS EXT
       - Use <ng-content> to allow user to enter ANY input type or attribute type
       - To be sort of RESTRICTIVE of the data that allowed use SELECT
         <p>
          <label> {{ label( )}} </label>
          <ng-content select="input, textarea">
        </p>
    3. In new-ticket TEMPLATE now add:
       <form>
        <app-control label="Title">
            <input name="title" id="title">
        </app-control>

        <app-control label="Request">
           <textarea name="request" id="request" rows="3"> </textarea>
        </app-control>
       </form>
         
## 109: Scoping CSS styles to components
- Styles added to component will be SCOPED only to that component!
- Make sure css file is reference in ts files styleUrl
- The styles that are scoped to reusable component will not work. Fix in nect section
- Add all styles to individual components INCLUDING its MEDIA QUERIES

## 110: Understand and configure view encapsulation
- What the hell is view encapsulation?
- USE CASE: THE PROBLEM:  when creating reusable components that use content projection w/ ng-content. The actual dynamic content is in OTHER components so you CANNOT style these components using the reusable
  components css file because it is SCOPED only to THAT component
  Example Component Css File in RESUABLE COMPONENT: control.css
      .control label { display: block}
      .control input, control textrea { color: red;}
   Example: RESUSABLE COMPONENT HTML FILE: control.html markup
       <p class="control">
       <ng-content select="input" />
       </p>
    THE PROBLEM: the control class will NOT WORK ON THE <ng-content /> markup in OTHER components its ONLY SCOPED TO MARKUP THATS REALLY AND NOT PLACEHOLDER MARKUP.
- THE FIX: go to component.ts of the REUSABLE component and add encapsulation: property to its @component decorator object
   THE EXAMPLE:  @Component({
                    encapsulation: ViewEncapsulation.None ........(make sure to IMPORT)
              })
- WHAT DOES THIS DO? disables CSS STYLE SCOPING making them global styles

## 111. Component Host Elements :Using :host selector in reusable components css
- WHAT THE HELLS IS A HOST ELEMENT? every angular component has a host element which is the element that SELECTED BY SELECTOR: exp "app-header" TARGETS <app-header>

- THE PROBLEM: The reusable button component does NOT have the actual button element in its MARKUP. The button element is in the COMPONENTS that will use the reusable button element
               So we CANNOT target the button element in the button components CSS to style it since its not there.

- THE FIX: use the host SELECTOR which allows you to add styles to the HOST ELEMENT which would be the button element rendered in OTHER COMPONENT
- THE FIX #2: in button component ADD button element to markout and in COMPONENTS where reusable button component is used WRAP in app-button component (now btn element will be in reusable component)
- HOW TO USE IT (fix #1): in the button.css to style the button elements we would add :host INSTEAD of using the button selector. :host TARGETS the HOST SELECTOR !!!
    :host {
        display: block;
        color: red;
    }
- QUESTION: Does view encapsulation have to be set to ViewEncasulation.NONE since styles are being added to another component via : NO NOT FOR USING :HOST SELECTOR!!!!!
## 112. Using Host Elements Like Regular Elements
- The Problem: in out CONTROL.HTML resuable component we have the following code
  <p class="control">
    <label> {{ label() }} >
    <ng-content select="input, textarea" />
  </p>
  - In our reusable component CSS we use the control selector to style the label and input
 - But we do NOT wnat to add the control selector to the above <p> but rather in the components that are using the reusable component! REMOVE P ELEMENT THAT WRAPS THE control.html code!
 - We cannot use the :host selector in the CSS because we have viewEnapsulation set to NONE and for some reason this will not work.
 - but WE CAN add the control class to the reusable component element selector in the components where we use this reusable component. 
 - IN NEW-TICKET COMPONENT HTML FILE ADD: 
    - <app-control class="control" label="title">
           code goes here
      <app-control />
      <app-control class="control" lable="request"></app-control>
## 113. REFACTOR ABOVE CODE: Interacting with Host Elements From Inside Components
- Use Case: PROBLE: redundant code: For above video 112 we must MANUALLY add the control class to every <app-control class="control"> to all the host element to style inputs. 
- SOLUTION: In the reusable CONTROL component's ts file add:
        @Component({
            host: {
                class: 'control'
            }
        })
- THIS WILL ADD THE CLASS ATTRIBUTE PROPERTY OF CONTROL TO 'app-control" where ever being used
- TIP: encapsulation DOES NOT have to be set to NONE to use this!!
- In new-ticket component html REMOVE the class="control" form the <app-control>
          <app-control label="Title">
            <input name="title" id="title">
          </app-control>
         <app-control  label="Request">
           <textarea name="request" id="request" rows="3"></textarea>
        </app-control>

## 114. When (NOT) to Rely on Host Elements: Removing Useless Wrapper Elements in Reusable Component that Use Content Projection.
- USE CASE: We Want to get RID of WRAPPERS in the reusable Components because they cause uneccisarry nesting in the DOM. BUT we have CSS classes added to these wrappers that use the reuable compnents styles
            get rid of all wrappers DIVs in the project (components that use resuable compoennts and have content projection). Add :host CSS selectors in reuable component CSS to target projected content in the components
            using it

- TIP: do NOT get rid of wrappers that have SEMANTIC meaning such as <form>, <section> ect but get rid of damn <div>
- SOLUTION #1(don't use): In the reusable components ts file we will add the class to the @dDecorator
              @Component({
            host: {
                class: 'control'
            }
        })
    - PROBLEM: this SHOULD add the class whereever the reusable components app selector is used BUT it will not work due to CSS scoping via VIEW encapsulation
    - SOULTION: In the reusable components ts file add the following property: 
             @Component({
                    encapsulation: ViewEncapsulation.None ........(make sure to IMPORT)
              })
- SOLUTION #2 (a better solution): Use host CSS selector in the reusable component. This will target the host element selector in any component using it. You DO NOT have to add encapsulation: viewEncapsulation.None to
              use it. You do NOT have to do anything on the html templates that use the reusable compoent except use the host wrapper to wrap the content. Make sure that :host selector is used to add
              styles to the projected content in the compoents INSTEAD of adding classes!

## 115. Interacting with Host Elements via @HostListener and @HostBinding
- There are TWO ways to add properties to the HOST ELEMENTS
  - 1. By adding a HOST property setting on the @Decorator object
       of the host element

       @Decorator({
           host: {
            class: 'control',
            '(click)': 'onClick()'
           }
       })
  - 2. WAY TWO: this is an older way and the first way is recommended
       Add @HostBinding and/or @HostListener in the component class

       export class Control Component{

        @HostBinding('class') className = 'control'
        @HostListner('click') onClick(){
          console.log(clicked)
        }
       }

       - the ('class') above is optional and this will be the property name added to the host component @decorator

       - ('click') is NOT optional and is the type of event
## Accessing Host Elements Programatically
- What the hell does this mean? When you want to ACCESS (some info) about the host element within the .ts component page
  - example: why would you want to access it?
- HOW TO ACCESS THE HOST ELEMENT IN THE FILE?
  - 1. via the contructor 
  - 2. OR via the inject function
- THE STEPS: to access the host element
  - 1. if using inject()
       a. import inject
       b. in the class set a variable equal to inject()
          private el = inject(ElementRef);
       c. Make sure to IMPORT ElementRef
       d. To console.log the ElementRef:
          1. add a click event to the host element that calls
             the onClick() method

          2.  @Decorator({
           host: {
            class: 'control',
            '(click)': 'onClick()'
           }
             })

          3. then: 
             onClick() {
              console.log(this.el)
             }
          4. Click the host element and you should see data in the
             console
## 117. Class Binding Repitiion: CONDITIONALLY RENDER CSS CLASSES
- How do you conditionally render ONE class on an element?
  a. You you CLASS BINDING and set equal to a condition
      exp: <div [class.status]="currentStatus === 'online' ">
      - in the component add a property called currentStatus
        and set to online or offline initially.
- 
## 118. Theres More Then One Way of Binding CSS Classes Dynamically
- BINDING MULTIPLY CLASSES DYNAMICALLY
- How? Add [class] to element and set equal to an OBJECT w/multiple
       properties with the key being the class and the value being
       the conditional

- USE CASE: In the server-status component CSS we have multiple css
           class that currently do NOT exist in its template.
           In the template add these class based on a condition.

           TIP: the condition will be the value of a property in its
                component.
- THE EXAMPLE: in the server-status template add
               <div [class]= "{
                     status: true (always add status class),
                     'status-online': currentStatus === 'online',
                     'status-offline': currentStatus === 'offline',
                     'status-unknown': currentStatus === 'unknown'
                  }">
        - Make sure to add the currentStatus property to the component
    
## 119. A Closer Look @ Dynamic Inline CSS Styling
- Dynamically adding Styles to a component/element
- How do you add a SINGLE style to a component dynamically?
    a. <div [style.fontSize]=" 'the computed value' " >
    a. TIP: USE camel case or wrap in single quotes for double words
    b. TIP: must wrap the VALUE in SINGLE QUOTES!!!!!!
- How to add MULTIPLE STYLES to a component dynamically?
    a. <div [style]="{
             fontSize: '64px',
             color: 'pink'
         }">

## 120. Manipulating State & Using Literal Values
- MIMIC A SERVER UPDATING ITS STATUS BY USING SetINTERVAL FUNCTION
- STEPS:
- 1. add a constructor function. Add setInterval function to its BODY
- 2. In interval function run code after 5 sec which is 5000ms
- 3. in setInterval function create variable that returns random
     number between 0-1
- 4. Create a conditional that checks if rnd number is less then 0.5
     if it is set this.currentStatus = 'online'

    currentStatus = 'offline'
    constructor(){
      setInterval(()=> {
        const rnd = Math.random();

        if( rnd < 0.5 ) {
          this.currentStatus = 'online';
        }else if (rnd < 0.9 ){
            this.currentStatus = ' offline';
        }else {
          this.currentStatus = 'unknown';
        }
      }, 5000)
    }
- 5. Set LITERAL TYPES on the currentStatus property this will allow
     only CERTAIN TYPES:
     example: 
     currentStatus: 'offline' | 'online' | 'unknown' = 'offline';
- 6. The server status CSS should now change every 5sec in the template
## 121. Introductin the Component LifeCycle ngOnInit
- WHAT THE HELL IS ngOnInit? all components go through a lifecycle
                   ngOnInit is a lifecyle hook that runs code AFTER
                   ANGULAR has INITIATED ALL INPUTS Read. So
                   input values will be AVAILABLE!
- WHATS THE DIFFERENCE BETWEEN THE CONSTRUCTOR &ngOnInit?
               - The constructor runs everytime a component is 
                 instantiated and ngOnit runs after inputs are read
- WHY SHOULD WE NOT PUT LOGIC IN THE CONSTRUCTOR?
               - best practice to keep LEAN and only use to initalize
                 classes! other logic should go in ngOnInit
## 122. Implementing LifeCycle Interfaces
- WHY SHOULD WE IMPLEMENT LIFECYCLE INTERFACES?
           a. It protects AGAINST TYPO'S! angular
              does NOT show errors when spelling ngonit or
              other lifecycles! So hard to debug
           b. Implement ALL THE HOOKS!!!!! to check for 
              typos
  
- HOW DO YOU IMPLEMENT LIFECYCLE INTERFACES?
           a. export class Server implements ngOnInit {
                ngOnInit(){
                  put code here!
                }
           }
           b. Make sure to IMPORT ngOnInit
## 123. Component LifeCylce a DeepDive
- Component LifeCylce Phases:
  1. Phase 1: Creation
           Method: constructor(): runs when angular instantiates
                   component
  2. Phase 2: Change Detection
           Method: ngOnInit: Runs once after angular initialized all 
                   the inputs. RUNS BEFORE COMPONENT TEMPLATE IS
                   INITALIZED. so you can change template ui based
                   on a properties updated state

           Method: ngOnChanges: Runs everytime component inputs 
                   changed
           Method: ngDoCheck: Runs evertime this components
                   checked for changes. 

           Method: ngAfterViewInit: Runs once after the components view
                   is initalized. 

           Method: ngAfterContentInit: Runs once after component 
                   content is initialized. 
           Method: ngAftterViewChecked: Runs everytime the components
                   view has been checked for changes. 

           Method: ngAfterContentChecked: Runs everytime the components
                   content has been checked for changes. 

- Execution Order: During Initialization
  1. Constructor

  Change Detection
  2. ngOnChanges
  3. ngOnInit
  4. ngDoCheck
  Content                          Views
  1. ngAfterContentInit          1. ngAfterViewInit
  2. ngAfterContentChecked       2. ngAfterViewChecked
  Rendering
  1. AfterRender

- Subsequent Updates
  1. ngOnChanges
  2. ngDoCheck
  3. ngAfterContentChecked     3. ngAferViewChecked
  Rendering
  1. AfterRender

- WHY SHOULD YOU ONLY INITIALIZE CLASSES IN THE CONSTRUCTOR?
     - best practices to keep it clean
     - it DOES not have ACCESS to INPUTS values!!!!
- RUN MOST OF THE LOGIC in ngOnInit hook...http calls ect
     - will run after input values are initalized
     - use this for component initialization
- WHEN SHOULD I RUN ngOnChanges?
     - when you want to update a component template based on 
       changes to the component state (input value changes)
     - This hook takes in a property called changes that
       stores data on the inputs current value, previous value
- WHEN SHOULD I RUN ngDoCHECK?
     - this code runs WHENEVER there is a change in a component
     - This code runs ALOT. Do not put code in this hook it will runa lot
      
## 124. Component Cleanup With ngOnDestroy
- WHATS ngOnDestroy?
  a. its hook that runs ONCE before a component is destroyed
- WHY THE HELL DO YOU NEED IT?
  a. it prevents memory leaks which slow down apps. Apps can 
     potentially keep running code in the background if a 
     component is not detroyed
- USE CASE: in video 124 we are running an interval to replicate
            a server with changing status text. We are NOT
            conditionally rendering the  service-status comp
            so its not destroy but it could potentially be
            removed in the future so we most destory it to 
            prevent MEMORY LEAKS: interval will keep running
            in background
- THE STEPS TO USING ngOnDestory
  1. implenment and import onDestroy in the class

  2. save setInverval function in a variable called intrval

  3. Hover over setInterval to see its return type which
     is NodeJs.Timeout

  4. In the class add invterval as a private (cant be accesed in template) property and set return type as NodeJs.TimeOut
  make sure to add a ? which means or UNDEFINDED
       private interval?: NodeJs.Timeout

  5. Create a onDestroy method in the body call:
     onDestroy(){
      clearTimeOut(this.interval)
     }

  6. TIP: if get an error with NodeJs.Timeout return type
         instead add:
       private interval?: ReturnType<typeof setInterval>  
  )
## 125. Component CleanUp With DestroyRef
- ngOnDestroy works in OLDER Angular Versions

- DestroyRef is a newer modern way to clean up components but it
  does not work with older versions of angular. Works with Angular
  16 and newer. 

- HOW DO YOU USE IT IN COMPONENTS?
  1. INJECT DestroyRef via the constructor OR the inject function
          a. private destroyRef = inject (DestroyRef);
  2. IMPORT DestroyRef: import { DestroyRef } from '@angular/core'

  3. Save LOGIC or function in a variable
         a. ngOnInit(){
              const interval = setInterval(()=> {
                 logic goies here
              })
         } 
  4. CALL DestroyRef when component is destroyed and add logic
     to clear the interval from above
         a. add this function AFTER setInverval function but still
            inside of ngOnInit

         b. this.destroyRef.onDestroy(()=> {
               clearInterval(interval)
         })
  5. You can use destroyRef onDestroy more then ONCE in a 
     component. You can use on serveral methods within a component
## 126. Handlong Form Submittion (repetition)

## 127.  Working with Template Variables

## 128.  Extracting Input Values Via Template Variables

## 129.  Template Variables and Component Instances

## 130.  Getting Access To Template Elements via  ViewChild

## 131.  Using the ViewChild Signal Function

## 132.  ViewChild vs ContentChild

## 133.  A Closer Look at Decorator based querires & LifeCycle Hooks

## 134.  The afterRender & afterNextRender LyfeCycle Functions

## 135.  Making Sense of Signal Effects

## 136.  Signal Effects CleanUp Functions
          