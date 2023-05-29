# Angular Material Responsive Menu Header Using Standalone Bootstrapping

This repository contains a header with a responsive menu using Angular Material in an application bootstrapped using standalone components.

## Use In Your Application

To Use in your application, you will need to install Angular Material
`ng add @angular/material`

This example is using the `indigo-pink.css` option.

Next you will need to generate a new component and copy the metadata from `header.component.ts`. Then copy the html and css from `header.component.html` and `head.component.css`

You will need to provide BrowserAnimationsModule in the providers array option of the bootstrapApplication method in `main.ts`

## Changing Main Content

To connect this component with the router, add a router-outlet as the projected content.
