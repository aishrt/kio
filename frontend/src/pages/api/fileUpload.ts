import axios from "axios";

export type fileDTO = {
  file: any; // Assuming 'file' is a File object
};

export const fileUpload = async (
  file: File
): Promise<fileDTO | undefined> => {
  try {
    console.log(file, "payload");

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("http://localhost:4004/upload", formData);

    if (response.status === 200) {
      const data = response.data.file;
      return data;
    } else {
      console.error("Error uploading image:", response.data);
    }
  } catch (error) {
    console.log(error);

    console.error("An error occurred while uploading image:", error);
  }
};
