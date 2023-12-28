import axios from "axios";

export type fileDTO = {
  file: any; // Assuming 'file' is a File object
};

export const fileUpload = async (
  payload: fileDTO
): Promise<fileDTO | undefined> => {
  try {
    console.log(payload, "payload");
    const item = payload;
    console.log(item, "item payload");

    const formData = new FormData();
    formData.append("file", payload.file);

    const response = await axios.post("http://localhost:4004/upload", formData);

    if (response.status === 200) {
      const data = response.data.file;
      return data;
    } else {
      console.error("Error uploading image:", response.data);
    }
  } catch (error) {
    console.error("An error occurred while uploading image:", error);
  }
};
