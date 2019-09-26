import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

// Example code if using CLASS with stateless components.
// Needs to use with `this.props` for parameter come from parents components.
// Needs to usw with `render()` in the first place.
class SkillsProgress extends Component {
  render() {
    const { skill, progress, blank } = this.props;
    const space = `${"\u00A0"}`.repeat(blank);
    return (
      // Use progress bar
      <Grid>
        <Cell col={12}>
          <div className="Resume-skill-title">
            {skill} {space}
            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default SkillsProgress;
