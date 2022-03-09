import React, { useState, useEffect, FC, useCallback } from "react";
import getProblem from "./lcapi/api";
import { Text } from "ink";

const ShowNote: FC = () => {
	const [message, setMessage] = useState("loading...");
	const fetchProblem = useCallback(async (slug: string) => {
		await getProblem(slug)
			.then((r) => setMessage(r.title))
			.catch((error) => setMessage("Error " + error));
	}, []);
	useEffect(() => {
		fetchProblem("two-sum");
	}, [fetchProblem]);
	return <Text color="green">{message}</Text>;
};

const App: FC<{ name?: string }> = ({ name = "Stranger" }) => (
	<>
		<Text>
			Hola, <Text color="green">{name}</Text>
		</Text>
		<ShowNote />
	</>
);

module.exports = App;
export default App;
