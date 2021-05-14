import React, { Component } from "react";
import axios from "axios";

class Department extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        this.setState({ post: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error in Retriving data" });
      });
  }

  render() {
    const { post, errorMsg } = this.state;
    return (
      <div>
        <h1>List of Department</h1>
        <table>
          <thead>
            <th>Department Name</th>
            <th>Department email</th>
          </thead>
          <tbody>
            {post.length
              ? post.map((post) => <tr key={post.id}><td>{post.name}</td><td>{post.email}</td></tr>)
              : null}
            {errorMsg ? <div>{errorMsg}</div> : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Department;
