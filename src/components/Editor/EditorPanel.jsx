import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const EditorPanel = ({
  obsStory = [], updateSection, selectedFont = 'monospace', fontSize = `1`
}) => {


  const avoidEnter = (e) => {
    // avoiding enter key for the Header
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      return false;
    }
  };
  return (
    <>
      {obsStory && obsStory.map((story, index) => (
        <Fragment key={story.id}>
          {Object.prototype.hasOwnProperty.call(story, 'title')
            && (
              <div
                className="flex m-4 p-1 rounded-md min-h-0"
                key={story.id}
              >
                <textarea
                  name={story.title}
                  onChange={e => updateSection(e.target.value, story.id)}
                  onKeyDown={avoidEnter}
                  rows={3}
                  cols={50}
                  // onClick={() => setSelectedStory(scrollLock === true ? 0 : story.id)}
                  value={story.title}
                  data-id={story.id}
                  className="flex-grow text-justify ml-2 p-2 text-xl"
                  style={{
                    fontFamily: selectedFont || 'sans-serif',
                    fontSize: `${fontSize}rem`,
                  }}
                />
              </div>
            )}
          {Object.prototype.hasOwnProperty.call(story, 'text')
            && (
              <div
                className="flex m-4 p-1 rounded-md"
                key={story.id}
              >
                <span className="w-5 h-5 bg-gray-800 rounded-full flex justify-center text-sm text-white items-center p-3 ">
                  {/* {index} */}
                  {index.toString().split('').map((num) => num)}
                </span>
                <textarea
                  name={story.text}
                  onChange={e => updateSection(e.target.value, story.id)}
                  onKeyDown={avoidEnter}
                  rows={8}
                  cols={50}
                  // onClick={() => setSelectedStory(scrollLock === true ? 0 : story.id)}
                  value={story.text}
                  data-id={story.id}
                  className="flex-grow text-justify ml-2 p-2 text-sm"
                  style={{
                    fontFamily: selectedFont || 'sans-serif',
                    fontSize: `${fontSize}rem`,
                    lineHeight: (fontSize > 1.3) ? 1.5 : '',
                  }}
                />
              </div>
            )}
          {Object.prototype.hasOwnProperty.call(story, 'end')
            && (
              <div
                className="flex m-4 p-1 rounded-md min-h-0"
                key={story.id}
              >
                <textarea
                  name={story.end}
                  onChange={e => updateSection(e.target.value, story.id)}
                  onKeyDown={avoidEnter}
                  // onClick={() => setSelectedStory(scrollLock === true ? 0 : story.id)}
                  cols={50}
                  value={story.end}
                  data-id={story.id}
                  className="flex-grow text-justify ml-2 p-2 text-sm"
                  style={{
                    fontFamily: selectedFont || 'sans-serif',
                    fontSize: `${fontSize}rem`,
                    lineHeight: (fontSize > 1.3) ? 1.5 : '',
                  }}
                />
              </div>
            )}
        </Fragment>
      ))}
    </>
  );
};
export default EditorPanel;
EditorPanel.propTypes = {
  obsStory: PropTypes.array,
  updateSection: PropTypes.func,
  selectedFont: PropTypes.string,
  fontSize: PropTypes.string
};
