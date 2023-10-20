import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { project } = router.query;
  return <div>Project: {project}</div>;
};

export default Project;
