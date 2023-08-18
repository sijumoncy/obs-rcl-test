# useStory Hook

documenting useStory hook

```jsx
import { useState, useEffect } from "react";
import MdtoJson from "../utils/MdtoJson";
import useStory from "../hooks/useStory";
import ReactJson from "react-json-view";

// const useStoryExample = () => {
const [file, setFiles] = useState();
const [parsedMd, setParsedMd] = useState();

const readFile = (uplaodFile) => {
  const reader = new FileReader();
  reader.onload = function () {
    let textContent = reader.result;
    setFiles(textContent);
  };

  reader.readAsText(uplaodFile);
};

const {
  state: { story },
  actions: { setStory },
} = useStory();

useEffect(() => {
  if (file) {
    setParsedMd(MdtoJson(file));
  }
}, [file]);

//   return (
<div>
  <div>
    <label>
      Upload Md File
      <input
        type="file"
        name="mdfile"
        accept=".md"
        onChange={(e) => readFile(e.target.files[0])}
      />
    </label>
  </div>
  <div style={{ marginTop: "10px" }}>
    {parsedMd && <ReactJson src={parsedMd} />}
  </div>
</div>;
//   );
// };

// useStoryExample();
```
