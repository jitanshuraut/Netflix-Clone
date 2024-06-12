import React from "react";
function MongoQuery(loading, error, data) {
  if (error) {
    return `ERROR: ${error.message}`
  }
  if (loading) {
    return "Wating..";
  }
  if (!data) {
    return "No data available";
  }
  if (data) {
    return data;
  }
}

export default MongoQuery;
