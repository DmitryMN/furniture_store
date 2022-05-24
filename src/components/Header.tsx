import React from "react";

export default function Header() {
  return (
    <header>
        <div>
            <span className="logo">House staff</span>
            <ul className="nav">
              <li>About</li>
              <li>contacts</li>
              <li>login</li>
            </ul>
        </div>
        <div className="presentation"></div>
    </header>
  )
}
