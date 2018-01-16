import React, { Component } from "react";
import "./style/TableSearch.css";
import { Link } from "react-router-dom";


class TableSearch extends Component {
  render() {
    const { id, name, url } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <Link onClick={() => window.reload()} to={`/job/${id}`}><td>{name}</td></Link>
            <td>{url}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default TableSearch;
