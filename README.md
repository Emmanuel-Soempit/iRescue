# IRescue for internship test.

# Part 2: API TEST

# UI
This is the recreation of the film design at  https://www.figma.com/file/yFAj4Th5R8L9f6iaPyb3TZ/iRescue-UI-%2F-Testing?type=design&node-id=0%3A1&mode=design&t=38Yl4MXbxROYfuDF-1.

This test project was done using React.Js and Tailwind Css. Vite was the seleted toolchain used to configure the react app.

All React components within this project has their specific folder. Each folder contains the Component's jsx file and a correponding styling js file containg the tailwind design.

The project is an exact relica of the film design given abouve, hence it is majorly static and responsive only to desktop layouts.

An error boundary was integrated into the project to avoid the famous "white-death" - white screen due to website crash from fatal errors.

This project is hosted with firebase hosting, here is the link: https://irescue-d6156.web.app/


#API
Succesfully integrated with this project are the APIs for registration, otp verification and login. All forms were validated and check before submition, the dasboard page is guarded by a protected route, therefore it cannot be accessed by an unauthenticated user.

In increasing the performance of the website, react memoization technique was used, therefore all components apart from the main pages were designed to be pure components - not in charge of their own state. 


