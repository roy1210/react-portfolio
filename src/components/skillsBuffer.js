import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class SkillsBuffer extends Component {
  render() {
    return (
      // Use progress bar
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex", fontSize: "1.4em" }}>
            {this.props.skill}
            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
              buffer={this.props.progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default SkillsBuffer;
