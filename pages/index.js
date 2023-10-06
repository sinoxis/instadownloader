import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import Head from "next/head";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoId = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoId}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  // Load Google Analytics when the component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-JJ2MNZKP7L";
    script.async = true;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-JJ2MNZKP7L");
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        {/* Google Analytics script is loaded asynchronously */}
      </Head>
      <header className="text-center mb-8">
        {/* ... (Your header content) */}
      </header>
      <div className="text-center">
        {/* ... (Your input field and button) */}
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          {/* ... (Thumbnail options and buttons) */}
        </div>
      )}
    </div>
  );
};

export default Index;
