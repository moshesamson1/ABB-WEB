# ABB-WEB
This is the unclassified repo for the abb project, web version.

As this is an unclassified repository, it will contain **only** unclassified data, forms and code.

## ABB-DUMBS-LIB
[![npm version](https://badge.fury.io/js/abb-dumbs-lib.svg)](https://badge.fury.io/js/abb-dumbs-lib) 
![Build](https://github.com/moshesamson1/ABB-WEB/workflows/Build/badge.svg) 
![Codecov](https://img.shields.io/codecov/c/github/moshesamson1/ABB-WEB?token=WAOEA7CXGH)

## Team Collaboration
All work will be managed using Trello.
There is a board designated to coding tasks specifically - commits should contain a reference to the relevant card in trello.

Notice that trello, in its free version, does not provide with permissions management. A good part of the responsibility is upon us, to not alter the boards and tasks without permissions and knowledge of the people who needs to know.

## Code
In this repo we will develop a set of dump components, each is a form of sort to use in the full ABB program, which is classified.

### Smart-Dumb Paradigm
Dumb components really just said a component that does not have a lot of states that are long-lived. it doesn't have access to services. it doesn't store data in a back-end all those sorts of things that really keep the focus of the component on presentation. We can call them isolated components as well.

Smart Components are simply those components, which contains states, implementing services or any kind of business logic happening in that component. It does not focus on presentation but what's happening in our component. Then, we simply emit the property to Dumb Components which are received by @Input() decorator.

A good explanation of this paradigm, with code example, can be found here: https://dev.to/mquanit/concept-of-smart-dumb-components-in-angular-2fom.

The code will be in a package(s) form. Using a new form will be as simple as using the right < tag > in the template of the smart component, providing it with the required input and enlising to the outputs is provides.

Versioning will be done automatically, and is discussed later, in the CI-CD section.
