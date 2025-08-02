import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const DetailContent = () => {
  const location = useLocation();
  const { id, title: initialTitle, thumbnail: initialThumbnail } = location.state || {};

  const [formData, setFormData] = useState({
    title: initialTitle,
    author: "",
    date: "",
    content: "",
    gallery: [],
    thumbnail: null,
  });

  const [thumbnailPreview, setThumbnailPreview] = useState(initialThumbnail || null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const type = id.split("_")[0];
        const collectionName = type.charAt(0).toUpperCase() + type.slice(1);
        const docRef = doc(db, collectionName, id);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log(data.title)
            setFormData({
              title: data.title || initialTitle || "",
              author: data.author || "",
              date: data.date || "",
              content: data.content || "",
              gallery: data.gallery || [],
              thumbnail: data.thumbnail || null,
            });
            setThumbnailPreview(data.thumbnail || initialThumbnail || null);
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      }
    };
    fetchData();
  }, [id, initialTitle, initialThumbnail]);

  return (
    <div className="flex justify-center min-h-screen mt-20">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
        {/* Thumbnail */}
        {thumbnailPreview && (
          <div className="mb-8">
            <img
              src={thumbnailPreview}
              alt="Thumbnail"
              className="w-full h-auto max-h-120 object-cover mx-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">{formData.title}</h1>

        {/* Author and Date */}
        <div className="flex flex-row items-center mb-4">
          <span className="font-medium text-gray-700 mr-2">From:</span>
          <span>{formData.author}</span>
        </div>
        <div className="flex flex-row items-center mb-4">
          <span className="font-medium text-gray-700 mr-2">Date:</span>
          <span>{formData.date}</span>
        </div>

        <hr className="w-full border-t-2 border-gray-500 my-3" />

        {/* Content */}
        <div className="whitespace-pre-line mb-8">
          {formData.content}
        </div>

        {/* Gallery */}
        {formData.gallery.length > 0 && (
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">Gallery:</label>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {formData.gallery.map((url, index) => (
                <div key={index} className="relative group">
                  <img
                    src={url}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailContent;
