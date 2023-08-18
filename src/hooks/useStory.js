// hooks to handle the states for obs story
import { useState } from "react";

const useStory = () => {
  const [story, setStory] = useState([]);

  const updateSection = (textValue, sectionId) => {
    const value = textValue.toString().replace(/[\n\r]/gm, "");
    const section = story[sectionId - 1];
    let newStory = {};
    if (Object.prototype.hasOwnProperty.call(section, "title")) {
      newStory = {
        id: section.id,
        title: value,
      };
    } else if (Object.prototype.hasOwnProperty.call(section, "text")) {
      newStory = {
        id: section.id,
        img: section.img,
        text: value,
      };
    } else if (Object.prototype.hasOwnProperty.call(section, "end")) {
      newStory = {
        id: section.id,
        end: value,
      };
    }

    const newStories = story.map((storyPiece) =>
      storyPiece.id !== newStory.id ? storyPiece : newStory
    );

    // let newData = { ...story };
    // newData = newStories;
    // setStory(newData);
    setStory([...newStories]);
  };

  return {
    state: {
      story,
    },
    actions: {
      setStory,
      updateSection,
    },
  };
};

export default useStory;
