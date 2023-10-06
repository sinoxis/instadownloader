import { useState } from "react";
import copy from "copy-to-clipboard";
import Head from "next/head"; // Import the Head component

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    // Your existing code for retrieving YouTube thumbnails
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        {/* Google Analytics script goes here */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JJ2MNZKP7L"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JJ2MNZKP7L');
          `}
        </script>
      </Head>
      {/* Rest of your component */}
      {/* ... */}
    </div>
  );
};

export default Index;
