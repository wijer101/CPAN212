import React, { useState } from 'react';

function App() {
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [fetchedSingleFile, setFetchedSingleFile] = useState(null);
  const [fetchedMultipleFiles, setFetchedMultipleFiles] = useState([]); // For multiple files
  const [dogImage, setDogImage] = useState(null); // For dog image
  const [dogImageBlob, setDogImageBlob] = useState(null); // For dog image blob to upload

  // Handle file input for single upload
  const handleSingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };

  // Handle file input for multiple uploads
  const handleMultipleFilesChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  // Upload a single file to the server
  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append('file', singleFile);

    try {
      const response = await fetch('http://localhost:8000/save/single', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error uploading single file:', error);
    }
  };

  // Upload multiple files to the server
  const uploadMultipleFiles = async () => {
    const formData = new FormData();
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files', multipleFiles[i]);
    }

    try {
      const response = await fetch('http://localhost:8000/save/multiple', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error uploading multiple files:', error);
    }
  };

  // Fetch a random single file from the server
  const fetchSingleFile = async () => {
    try {
      const response = await fetch('http://localhost:8000/fetch/single');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setFetchedSingleFile(url);
    } catch (error) {
      console.error('Error fetching single file:', error);
    }
  };

  // Fetch multiple random files from the server
  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch('http://localhost:8000/fetch/multiple');
      const files = await response.json();

      const imagePromises = files.map(async (filePath) => {
        const imageResponse = await fetch(filePath);
        const imageBlob = await imageResponse.blob();
        return URL.createObjectURL(imageBlob);
      });

      const imageURLs = await Promise.all(imagePromises);
      setFetchedMultipleFiles(imageURLs);
    } catch (error) {
      console.error('Error fetching multiple files:', error);
    }
  };

  // Fetch random dog image from Dog CEO API
  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message); // Set the dog image URL

      // Fetch the image as a blob for uploading
      const imageResponse = await fetch(data.message);
      const imageBlob = await imageResponse.blob();
      setDogImageBlob(imageBlob); // Save the blob for uploading
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  // Upload the fetched dog image to the server
  const uploadDogImage = async () => {
    if (!dogImageBlob) {
      alert('No dog image to upload');
      return;
    }

    // Convert the blob to a File object
    const formData = new FormData();
    const file = new File([dogImageBlob], 'random-dog.jpg', { type: 'image/jpeg' });
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/save/single', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error uploading dog image:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>File Upload and Fetch App</h1>

      {/* Section for uploading single file */}
      <div>
        <h2>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <button onClick={uploadSingleFile}>Upload Single File</button>
      </div>

      {/* Section for uploading multiple files */}
      <div>
        <h2>Upload Multiple Files</h2>
        <input type="file" multiple onChange={handleMultipleFilesChange} />
        <button onClick={uploadMultipleFiles}>Upload Multiple Files</button>
      </div>

      {/* Section for fetching and displaying a single file */}
      <div>
        <h2>Fetch Single File</h2>
        <button onClick={fetchSingleFile}>Fetch Single File</button>
        {fetchedSingleFile && (
          <div>
            <h3>Single File</h3>
            <img src={fetchedSingleFile} alt="Fetched Single" style={{ width: '200px', marginTop: '10px' }} />
          </div>
        )}
      </div>

      {/* Section for fetching and displaying multiple files */}
      <div>
        <h2>Fetch Multiple Files</h2>
        <button onClick={fetchMultipleFiles}>Fetch Multiple Files</button>
        <div className="image-gallery">
          {fetchedMultipleFiles.map((imageURL, index) => (
            <img key={index} src={imageURL} alt={`Fetched Multiple ${index}`} style={{ width: '200px', marginTop: '10px' }} />
          ))}
        </div>
      </div>

      {/* Section for fetching random dog image */}
      <div>
        <h2>Random Dog Image</h2>
        <button onClick={fetchRandomDogImage}>Get Random Dog Image</button>
        {dogImage && (
          <div>
            <h3>Random Dog</h3>
            <img src={dogImage} alt="Random Dog" style={{ width: '300px', marginTop: '10px' }} />
          </div>
        )}
        {dogImageBlob && (
          <button onClick={uploadDogImage}>Upload Dog Image to Server</button>
        )}
      </div>
    </div>
  );
}

export default App;
