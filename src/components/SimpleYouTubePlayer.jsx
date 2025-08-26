const getYouTubeId = (url) => {
  const regExp = /^.*(?:youtu\.be\/|v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
};

const SimpleYouTubePlayer = ({ url }) => {
  const videoId = getYouTubeId(url);

  return (
    <div className="w-full h-screen">
      {videoId ? (
        <iframe
          className="w-full h-full"
         src={`https://www.youtube.com/embed/${videoId}?controls=1&autoplay=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};

export default SimpleYouTubePlayer;
