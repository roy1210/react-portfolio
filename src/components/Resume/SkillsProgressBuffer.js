import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class SkillsProgressBuffer extends Component {
  render() {
    const { skill, progress, blank } = this.props;
    const space = `${"\u00A0"}`.repeat(blank);

    return (
      // Use progress bar
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex", fontSize: "1.4em" }}>
            {skill} {space}
            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={progress}
              buffer={progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default SkillsProgressBuffer;
