import React, { Fragment } from 'react';

function SortButton({ field, label, onSort, sort }) {
  const isActive = sort.field === field;

  return (
    <button
      className={`btn btn-sm btn-outline-${isActive ? 'primary' : 'secondary'}`}
      style={{ marginLeft: '1rem' }}
      onClick={() => {
        onSort(field);
      }}
    >
      {/* Provide some extra info for screen readers only */}
      {/* and add a line or arrow icon for sighted users */}
      {/* to display current order */}
      {isActive ? (
        <Fragment>
          <span className="sr-only">
            sort by {label} in{' '}
            {`${sort.order === 'asc' ? 'desc' : 'asc'}ending`} order
          </span>
          <span role="img" alt="">
            {sort.order === 'asc' ? '↓' : '↑'}
          </span>
        </Fragment>
      ) : (
        <Fragment>
          <span className="sr-only">sort by {label} in ascending order</span>
          <span role="img" alt="">
            ―
          </span>
        </Fragment>
      )}
    </button>
  );
}

// It should be a dumb component, it doesn't need to have
// its own state. I also think TableCells is not a great
// name, this one should be named Table as this is the
// table, not just the cells :)
function TableCells({ data, header, onSort, sort }) {
  return (
    <table className="table table-bordered table-sm table-responsive-sm">
      <thead className="thead-dark">
        <tr>
          <th
            scope="col"
            aria-sort={sort.field === 'id' ? `${sort.order}ending` : 'none'}
          >
            {header.id}
            {/* You should use a button to handle these clicks */}
            {/* not the table head directly. #accessibility */}
            <SortButton
              field="id"
              label={header.id}
              onSort={onSort}
              sort={sort}
            />
          </th>
          <th
            scope="col"
            aria-sort={
              sort.field === 'name.lastName' ? `${sort.order}ending` : 'none'
            }
          >
            {header.name}
            <SortButton
              field="name.lastName"
              label={header.name}
              onSort={onSort}
              sort={sort}
            />
          </th>
          <th
            scope="col"
            aria-sort={
              sort.field === 'companyName' ? `${sort.order}ending` : 'none'
            }
          >
            {header.companyName}
            <SortButton
              field="companyName"
              label={header.companyName}
              onSort={onSort}
              sort={sort}
            />
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
  );
}

export default TableCells;
