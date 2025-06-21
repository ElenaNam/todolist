import { useMeQuery } from "@/features/auth/api/authApi";

export const App = () => {
	const {data, isLoading, isError, error} = useMeQuery()


	if(isLoading) return <p>Loading...</p> 
	if(isError) return <pre>{JSON.stringify(error, null, 2)}</pre> //TODO: handleError

	return (
		<div className="App">
			{data?.data.login}
		</div>
	);
}
