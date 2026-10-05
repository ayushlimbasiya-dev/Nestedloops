import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <NavLink to="/dashboard">Home</NavLink> |{" "}
        <NavLink to="/dashboard/profile">Profile</NavLink> |{" "}
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>

      <hr />

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}

export default Dashboard;