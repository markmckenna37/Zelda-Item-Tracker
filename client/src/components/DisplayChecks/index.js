import React, {Component} from "react";
import { Layout } from "antd";
import API from "../../utils/API";
const { Content } = Layout;


const styles = {
    margin: "5rem 0 0 5rem",
    width: "800px",
    height: "300px",
    background: "salmon"

}

// function findChecks() {
//     API.getChecks()
//     .then(res => 
//       console.log(res.data),
//         )
//         .catch(err => console.log(err));
//   }
  
// findChecks()
class DisplayChecks extends Component {
    render() {
       return (
           <Content style={styles}>
            {this.props.message}
           </Content>
           )
    }
}

export default DisplayChecks