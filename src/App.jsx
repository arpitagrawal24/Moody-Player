import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import DummyVideo from './assets/SampleVideo_1280x720_30mb.mp4';

function App() {
  const [videoUrl, setVideoUrl] = useState(DummyVideo);
  const [link, setLink] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const generatedUrl = URL.createObjectURL(file);
      setVideoUrl(generatedUrl);
    }
  };

  const handleSubmit = () => {
    setVideoUrl(link);
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-amber-500 p-5 m-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-4 text-center">Moody Player</h1>
          <div className="mb-4 flex justify-center w-2/3">
            <label className="flex mb-1 font-bold items-center px-2">Video Url:</label>
            <input
              type="text"
              placeholder="Enter Video Url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 flex justify-center w-fit">
            <label className="flex font-bold items-center">Select Video:</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="w-3/4 ml-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="min-w-[150px] bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex justify-center p-5">
          <div className="border-2 bg-gray-300 p-2 rounded-lg w-3/4 sm:w-full lg:w-1/2 xl:w-1/2 h-80 sm:h-[50vh] lg:h-[60vh] xl:h-[60vh]">
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
