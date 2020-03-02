import React, { Component } from "react";
import TableCell from "../components/TableCells";
import { getData, getHeader } from "../services/tableData";
import Pagination from "../components/Pagination";
import { pageData } from "../utils/pageData";
import _ from "lodash";

class Table extends Component {
  state = {
    data: [],
    header: [],
    pagesize: 4,
    currentPage: 1,
    sortColumn: { path: "companyName", order: "asc" }
  };
  componentDidMount() {
    this.setState({ data: getData(), header: getHeader() });
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleSort = sortColumn => {
    const storeData = [...this.state.data];
    console.log("storedata : ", storeData);
    const sortData = _.orderBy(
      storeData,
      [sortColumn.path],
      [sortColumn.order]
    );
    console.log("sortData : ", sortData);
    this.setState({ storeData: sortData, sortColumn });
  };
  handleSort = sortColumn => {
    const storeData = { ...this.state.sortColumn };
    const sortData = _.orderBy(
      storeData,
      [sortColumn.path],
      [sortColumn.order]
    );
    this.setState({ storeData: sortData, sortColumn });
  };
  render() {
    const {
      data: allData,
      header,
      pagesize,
      currentPage,
      sortColumn
    } = this.state;
    const { length: count } = this.state.data;
    const sorted = _.orderBy(allData, [sortColumn.path], [sortColumn.order]);
    const dataz = pageData(sorted, currentPage, pagesize);
    return (
      <div className="row m-5">
        <div className="col">
          <TableCell
            data={dataz}
            header={header}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            pagesize={pagesize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
            itemsCount={count}
          />
        </div>
      </div>
    );
  }
}
export default Table;
