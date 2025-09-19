import React, { useState } from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="btn btn-dark"
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "15px",
          left: "15px",
          zIndex: 1200,
        }}
      >
        &#9776; {/* Unicode hamburger icon */}
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar bg-dark text-white p-3 position-fixed top-0 start-0 h-100 ${
          isOpen ? "sidebar-open" : "sidebar-closed"
        }`}
        style={{
          width: "180px",
          transition: "transform 0.3s ease",
          zIndex: 1100,
        }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 text-white text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Home");
              toggleSidebar();
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Home" ? "active" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("Create Post");
              toggleSidebar();
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Create Post" ? "active" : ""
              }`}
            >
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
