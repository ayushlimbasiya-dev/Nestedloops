// // use params
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Link to="/user/101">User 101</Link>
//       <br />
//       <Link to="/user/202">User 202</Link>
//     </div>
//   );
// }

// function User() {
//   const { id } = useParams();
//   return (
//     <div>
//       <h1>User Page</h1>
//       <h2>User ID: {id}</h2>
//       <Link to="/">Go Home</Link>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user/:id" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// NESTED LOOPS
import { BrowserRouter, Routes, Route, Link,NavLink, Outlet } from "react-router-dom";
import "./App.css";

// Home Page
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Home Page</p>
    </div>
  );
}

// Dashboard Layout
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <NavLink to="/dashboard">Dashboard Home</NavLink> |{" "}
        <NavLink to="/dashboard/profile">Profile</NavLink> |{" "}
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>
      <hr />
      {/* Nested route render here */}
      <Outlet />
    </div>
  );
}

// Dashboard Home
function DashboardHome() {
  return (
    <div>
      <h2>Dashboard Home</h2>
      <p>This is the dashboard page</p>
    </div>
  );
}

// Profile
function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <p>This is your profile page.</p>
    </div>
  );
}

// Settings
function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <p>This is your settings page.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Parent Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* child Nested Routes */}
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;