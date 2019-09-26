import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

// Example code if using arrow function with stateless components.
// No need for this.props because not CLASS components. below argument come from parents and without typing `this.props`
const SkillsProgressBuffer = ({ skill, progress, blank }) => {
  const space = `${"\u00A0"}`.repeat(blank);
  return (
    <Grid>
      <Cell col={12}>
        <div className="Resume-skill-title">
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
};

export default SkillsProgressBuffer;
