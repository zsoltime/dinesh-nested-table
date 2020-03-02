import React, { Component } from "react";

class TableCells extends Component {
  sortIt = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { data, header } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th
                onClick={() => {
                  this.sortIt("name");
                }}
              >
                {header.name}
              </th>
              <th
                onClick={() => {
                  this.sortIt("companyName");
                }}
              >
                {header.companyName}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => {
              if (d.name.firstName) {
                return (
                  <tr key={d.name.firstName}>
                    <td>{d.name.firstName + ' ' + d.name.lastName}</td>
                    <td>{d.companyName}</td>
                  </tr>
                );
              }
              return (
                <tr key={d.name}>
                  <td>{d.name}</td>
                  <td>{d.companyName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableCells;
