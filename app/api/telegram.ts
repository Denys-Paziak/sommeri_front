import axios from "axios";

// const baseURL = `https://api.telegram.org/bot${token}/`;

export const sendMessageWithFileToTelegram = async (
  message: string,
  file?: File | null,
  token?: string,
  chatId?: string
): Promise<void> => {
  const baseURL = `https://api.telegram.org/bot${token}/`;

  try {
    const formData = new FormData();
    formData.append("chat_id", `${chatId}`);

    const messageLength = message.length;

    if (messageLength > 1024 || !file) {
      const url = `${baseURL}sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`;
      const response = await fetch(url);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.description || "Something went wrong...");
      }

      return;
    }

    formData.append("caption", message);

    if (file) {
      formData.append("document", file);
    }

    const url = `${baseURL}sendDocument`;
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

export const sendMessageToTelegram = async (
  message: string,
  token?: string,
  chatId?: string
): Promise<void> => {
  const baseURL = `https://api.telegram.org/bot${token}/`;
  const url = `${baseURL}sendMessage?chat_id=${chatId}&text=${message}`;

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();

    await Promise.reject(error.description || "Something went wrong...");
  }
};
