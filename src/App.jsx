import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Registration from "./pages/Registration";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* SIDEBAR */}
        <Sidebar isOpen={isSidebarOpen} />
        {/* CONTENT */}
        <div
          className={`main-content ${isSidebarOpen ? "w-[85vw]" : "w-full"}`}
        >
          <Navbar toggleSidebar={toggleSidebar} />
          <hr />
          <div
            className="content-scrollable overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 73px)" }}
          >
            <Registration />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
