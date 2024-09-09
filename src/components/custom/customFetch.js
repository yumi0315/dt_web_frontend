const BASE_URL = "http://localhost:3030";

export const customFetch = async ({ path, method, headers, body }) => {
  try {
    const options = {
      method,
      headers: headers || {
        "Content-Type": "application/json",
      },
    };
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}/api${path}`, options);

    const text = await response.json();
    console.log(text);

    if (!response.ok) {
      throw new Error("서버에서 데이터를 가져오는 데 실패했습니다.");
    }

    return text;
  } catch (error) {
    console.error("Error fetching welding list:", error.message);
    throw error;
  }
};
