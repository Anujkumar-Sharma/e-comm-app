import { useRouter } from "next/router";

const useActivePath = () => {
  const router = useRouter();
  console.log({ router });
  return "";
};

export default useActivePath;
