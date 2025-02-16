export const getResumeData = async () => {
  const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_URL}/resume?jsx=true`);
  return response.json();
};
