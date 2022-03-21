import React from "react";

export const SearchProductForm = ({
                                      search, setSearch
                                  }) => {
    return(
        <div className="login">
            <div className="passcode-container">
                <div className="center-block">
                    <h1 className="passcode">Search</h1>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}>
                    </input>
                </div>
            </div>
        </div>
    );
}