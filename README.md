# React Design Pattern Part 1

Welcome to the React Design Patterns part 1 project, Helps you to understand the Container/Presentation
and HOC Patterns with examples and explanations.

## Getting Started
Follow the below command to start with examples;

``` npm install or npm i ```<br/>
``` npm run dev ```<br/>
to run server with ip host
``` npm start ```

# 1. Container and Presentation Pattern

## Container Component

The Container Component acts as the brain of your React application,
managing application logic and state. It fetches data, handles
user interactions, and passes data down to the Presentation Component.
Think of it as the controller, to separate concerns from the flow of information.

## Presentation Component

The Presentation Component focuses only on displaying data in a visually
appealing manner. It receives data from the Container Component via props
and renders it according to your design specifications. This component is purely
focused on the view of your application, leaving the heavy lifting to the Container Component.

### Benefits

1. Improve Maintainability
2. Enhanced Reusability
3. Simplified Testing
4. Loose coupling

# 2. HOC (Higher-Order Component) Pattern

HOCs are functions that take a component as input and return a new component with enhanced functionality.
This new component inherits the functionality of the original component and gains additional features provided by the HOC.
Practical applications of HOCs are Authentication, Data Fetching, Error Handling, Logging,  etc…

## HOC Authentication Example

Implement a HOC to handle authentication and restrict access to certain components based on user roles.
The HOC can check user authentication status and either render the original component or redirect to a login page.

## Considerations of HOC

<table>
    <thead>
        <tr>
            <th>Advantages</th>
            <th>Disadvantages</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Reusability of logic</td>
            <td>Increased complexity</td>
        </tr>
        <tr>
            <td>Component composition</td>
            <td>Potential for performance issues</td>
        </tr>
        <tr>
            <td>Improved readability</td>
            <td>Difficult debugging</td>
        </tr>
    </tbody>
</table>

### Best Practices of HOCs

1. Clear naming conventions
2. Minimal dependencies
3. Though documentation about logic
4. Single purpose