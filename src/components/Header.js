import React from "react";

function Header({ name }) {
    return (
        <Header>
            <h1>{name || "Default Blog Name"}</h1>
        </Header>
    );
}
export default Header;