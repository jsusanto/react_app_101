# react_app_101
Create React App 101 and more functionalities along the tutes.

# 1. Install Node.js and npm
Ensure you have Node.js installed, as it comes with npm (Node Package Manager). You can check by running:
```
node -v
npm -v
```

# 2. Create a New React App
Use Create React App to quickly set up a new project:
```
npx create-react-app my-app-101
```

Navigate into your new app:

```
cd my-app-101
```

# 3. Run the Development Server
Start your React application:
```
npm start
```

This will launch a local development server, and you can view your app at http://localhost:3000.

# 4. Modify App.js
Open src/App.js and replace its content with a simple React component:

```
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React app.</p>
    </div>
  );
}

export default App;
```