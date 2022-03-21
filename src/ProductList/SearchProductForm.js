import React from "react";

export const SearchProductForm = ({
                                      search, setSearch
                                  }) => {
    return(
        <div>
            <div className="align-1">
                <div className="container-1">
                    <h1 className="text-1">Search</h1>
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