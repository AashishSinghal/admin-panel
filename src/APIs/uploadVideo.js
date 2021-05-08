import axios from "axios";

export const uploadVideo = async (data) => {
  try {
    const res = await axios.post(
      "http://13.127.144.92:8886/PreUploadVideo/upload/",
      data
    );
    return res;
  } catch (err) {
    console.log("Failed to Upload Video", err);
  }
};
