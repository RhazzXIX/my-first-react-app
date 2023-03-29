import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Counter from "./components/Lifecycle";
import Profile from "./components/Profile";

// const RouteSwitch = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/counter" element={<Counter />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

const RouteSwitch = <RouterProvider router={router} />;

export default RouteSwitch;
