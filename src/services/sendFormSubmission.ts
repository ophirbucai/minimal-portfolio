export const sendFormSubmission = async <T extends object>(data: T, token: string) => {
  const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_URL}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...data, token }),
  });
  return response.json();
};
