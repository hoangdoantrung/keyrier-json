import React from "react";
import ReactTable from "react-table";
import { Col, Input, Label, Row } from "reactstrap";
import { customToString } from "../../helpers/string";

interface IProps<T> {
  data: T[];
}
interface IState {
  groupBy: string[];
}

class OutputTable<T> extends React.Component<IProps<T>, IState> {
  public constructor(props: IProps<T>) {
    super(props);
    this.state = { groupBy: [] };
  }

  public render() {
    if (
      !this.props.data ||
      !Array.isArray(this.props.data) ||
      this.props.data.length === 0
    ) {
      return <div />;
    }
    const keyMap = new Map<any, any>();

    this.props.data
      .filter(d => d && !Object.is(d, {}))
      .map(d => Object.keys(d))
      .forEach(keysToAdd => {
        keysToAdd.forEach(key => (keyMap[key] = key));
      });
    const keys = Object.keys(keyMap).sort();

    if (keys.length <= 0) {
      return <div />;
    }

    const columns = keys.filter(key => typeof key === "string").map(key => {
      return {
        Aggregated: (row: any) => row.value,
        Cell: (props: any) => customToString(props.value),
        Header: key,
        accessor: key
      };
    });

    return (
      <div>
        <Row>
          <Col>
            <Label for="exampleSelect">Grouping</Label>
            <Input
              type="select"
              name="select"
              id="groupingSelect"
              onChange={this.handleGroupingSelectChange}
            >
              <option key={undefined} />
              {keys.map(key => <option key={key}>{key}</option>)}
            </Input>
          </Col>
          <Col sm={10}>
            <ReactTable
              className="-highlight"
              data={this.props.data}
              defaultPageSize={10}
              columns={columns}
              filterable={true}
              pivotBy={this.state.groupBy}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private readonly handleGroupingSelectChange = (e: any) => {
    this.setState({ groupBy: e.target.value ? [e.target.value] : [] });
  };
}

export default OutputTable;
