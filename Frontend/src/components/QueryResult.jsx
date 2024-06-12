import React from "react";
import { MoonLoader } from "react-spinners";


function QueryResult({ loading, error, data, children }) {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
     <>
     <div style={{height:"200px"}}>
      <MoonLoader color="red" />
      </div>
     </>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
}

export default QueryResult;
