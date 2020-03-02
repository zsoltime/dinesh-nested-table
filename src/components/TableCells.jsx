import React, { Component, Fragment } from 'react';

class TableCells extends Component {
  sortIt = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { data, header } = this.props;
    return (
      <div>
        <table className="table table-bordered table-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">{header.id}</th>
              <th
                scope="col"
                onClick={() => {
                  this.sortIt('name');
                }}
              >
                {header.name}
              </th>
              <th
                scope="col"
                onClick={() => {
                  this.sortIt('companyName');
                }}
              >
                {header.companyName}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => (
              <Fragment key={d.id}>
                <tr>
                  <th className="align-middle" scope="row" rowSpan="2">
                    {d.id}
                  </th>
                  <td>{d.name.firstName}</td>
                  <td className="align-middle" rowSpan="2">
                    {d.companyName}
                  </td>
                </tr>
                <tr>
                  <td>{d.name.lastName}</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableCells;
