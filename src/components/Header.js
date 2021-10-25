import React from "react";

const Header = () => {
    return(
        <nav className="mx-auto p-4">
            <div className="flex">
                <div>Logo</div>
                <div className="flex ml-auto space-x-4">
                    <h2>sign up</h2>
                    <h2>log in</h2>
                    <h2>contact</h2>
                </div>
            </div>
        </nav>
    );
}

export default Header