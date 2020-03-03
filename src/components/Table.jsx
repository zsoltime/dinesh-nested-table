import React, { Component } from 'react';
import _ from 'lodash';

import TableCell from '../components/TableCells';
import Pagination from '../components/Pagination';
import { getData, getHeader } from '../services/tableData';
import { pageData } from '../utils/pageData';

class Table extends Component {
  state = {
    currentPage: 1,
    data: [],
    header: [],
    pagesize: 4,
    sort: { field: 'id', order: 'asc' },
  };

  componentDidMount() {
    this.setState({ data: getData(), header: getHeader() });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = field => {
    // You should handle sorting only here, not in TableCells
    this.setState(prevState => {
      const { data, sort } = prevState;
      // We can create a new object, the field must be the
      // field provided and we can add an order property
      // below, just like you did before
      const updatedSort = { field };

      if (sort.field === field) {
        updatedSort.order = sort.order === 'asc' ? 'desc' : 'asc';
      } else {
        updatedSort.order = 'asc';
      }

      // Ordering the data should also be done here, not in
      // render() as render should only read the state and
      // render changes :)
      const sortedData = _.orderBy(data, updatedSort.field, updatedSort.order);

      return {
        data: sortedData,
        sort: updatedSort,
      };
    });
  };

  render() {
    const { currentPage, data, header, pagesize, sort } = this.state;
    // I'd still move it outside, either pass currentPage,
    // pagesize to TableCell and handle it there, or add a
    // new paginatedData state here?
    const paginatedData = pageData(data, currentPage, pagesize);

    return (
      <div className="row m-5">
        <div className="col">
          <TableCell
            data={paginatedData}
            header={header}
            onSort={this.handleSort}
            sort={sort}
          />
          <Pagination
            currentPage={currentPage}
            itemsCount={data.length}
            onPageChange={this.handlePageChange}
            pagesize={pagesize}
          />
        </div>
      </div>
    );
  }
}
export default Table;
