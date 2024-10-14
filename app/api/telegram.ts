import axios from "axios";

const baseURL =
  "https://api.telegram.org/bot7886880144:AAGn-UlOgX8KyEY2iHk3lB0VHMv67Pqmbzk/";

export const sendMessageWithFileToTelegram = async (
  message: string,
  file?: File | null
): Promise<void> => {
  try {
    const formData = new FormData();

    // Add the message to formData
    formData.append("chat_id", "-1002440367804");
    formData.append("caption", message);

    if (file) {
      // Add the file to formData if it exists
      formData.append("document", file);
    }

    const url = `${baseURL}${file ? "sendDocument" : "sendMessage"}`;
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error(
        response.data?.description ||
          "Щось пішло не так при відправленні даних..."
      );
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(
        error.response?.data?.description ||
          "Axios помилка: щось пішло не так при відправленні даних..."
      );
    } else {
      return Promise.reject(
        (error as Error).message ||
          "Щось пішло не так при відправленні даних..."
      );
    }
  }
};

export const sendMessageToTelegram = async (message: string): Promise<void> => {
  const url = `${baseURL}sendMessage?chat_id=-1002440367804&text=${message}`;

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();

    await Promise.reject(error.description || "Something went wrong...");
  }
};
