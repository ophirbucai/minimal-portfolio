import { getResumeData } from "@/services";
import { useEffect, useState } from "react";

type Resume = Record<"introduction" | "contact" | "experience", string>;

export const useResumeData = () => {
  const [resume, setResume] = useState<null | Resume>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    getResumeData()
      .then(setResume)
      .catch((e) => {
        console.error(e);
        setError("Failed to fetch resume data");
      });
  }, []);

  return {
    resume,
    error,
  };
};
