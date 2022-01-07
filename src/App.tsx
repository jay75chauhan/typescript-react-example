import React from "react";

import { TextField } from "./TextField";

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div>
      <TextField text="hello" person={{ firstName: "", lastName: "jay" }} />
    </div>
  );
};

export default App;
