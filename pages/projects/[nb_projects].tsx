import { useRouter } from "next/router";

export default function NbProjects() {
	const router = useRouter();
	const { nb_projects } = router.query;
	return <div>Projects number: {nb_projects}</div>;
}
