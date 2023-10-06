import { useState } from "react";
import copy from "copy-to-clipboard";
import Head from "next/head"; // Import the Head component


const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
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
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
<div className="container mx-auto px-4 py-8 flex flex-col justify-center h-screen">
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
          <meta name="monetization" content="8e7b017832054843cfa3ba823e3206ad" />
      </Head>
      <header className="text-center mb-8">
        <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Take your YouTube channel to the next level by easily downloading high-quality thumbnails in various resolutions. Our user-friendly application lets you gain inspiration from other creators' thumbnails, perfect for spicing up your own videos. Just paste the video URL, click 'Download Thumbnails' and elevate your content with eye-catching visuals tailored to your needs.
        </p>
      </div>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>

                    <div className="text-left mt-4">
  <h2 className="text-xl font-semibold mb-2">
    Get High-Quality YouTube Thumbnail Images for Free
  </h2>
  <p className="text-gray-600">
    This website allows you to easily download thumbnail images from YouTube videos in high resolution. It supports Full HD (1080p), HD (720p), SD (480p), and small sizes.
  </p>

  <h2 className="text-xl font-semibold mt-4 mb-2">
    Benefits of Downloading YouTube Thumbnails
  </h2>
  <p className="text-gray-600">
    People use this tool to get thumbnails from YouTube videos for presentations, animation projects, and other uses. The high-quality images can enhance your work.
  </p>

  <h2 className="text-xl font-semibold mt-4 mb-2">
    How to Use the YouTube Thumbnail Downloader
  </h2>
  <p className="text-gray-600">
    It's simple to download YouTube thumbnails:
  </p>
  <ol className="list-decimal list-inside text-gray-600 pl-4">
    <li>Copy the link to the YouTube video with the thumbnail you want.</li>
    <li>Paste the link in the input box. Then click 'Download Thumbnails' to generate different sized thumbnails.</li>
    <li>Click the "Download Thumbnail" button. The images will be downloaded to your device.</li>
  </ol>
  <p className="text-gray-600 mt-2">
    On Android, you need to save the images. On iPhone, you'll need a jailbroken device to save them. It works on all devices and desktop browsers except un-jailbroken iPhones.
  </p>

  <h2 className="text-xl font-semibold mt-4 mb-2">
    Copyright and Reuse Considerations
  </h2>
  <p className="text-gray-600">
    The thumbnails are copyrighted by the video owners. To reuse them, you need permission, especially for YouTube videos. For other uses like websites and logos, reusing thumbnails likely won't lead to DMCA complaints.
  </p>

  <h2 className="text-xl font-semibold mt-4 mb-2">
    Optimizing Reused Thumbnails for SEO
  </h2>
  <p className="text-gray-600">
    Simply reusing YouTube thumbnails is not optimal for SEO since Google indexes the originals. To make reused thumbnails SEO-friendly, modify them with Photoshop or other software. This makes them unique again for search engines.
  </p>

  <h2 className="text-xl font-semibold mt-4 mb-2">
    Key Takeaways
  </h2>
  <p className="text-gray-600">
    - Easily download high-quality YouTube thumbnails for free.<br />
    - Useful for presentations, projects, and more.<br />
    - Simple process to paste a link and download images.<br />
    - Requires permission for reuse on YouTube.<br />
    - Modify thumbnails to make them SEO-friendly.
  </p>
</div>

<p className="text-gray-600 mt-4">
  Copyright © 2023 Download-Youtube-Thumbnails.com, All rights reserved.
</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
