import React, { useState, useEffect, FC } from "react";
import { Text } from "ink";

const Counter: FC = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prevValue) => prevValue + 1);
		}, 100);
		return () => clearInterval(timer);
	}, []);

	return <Text color="green">{counter} tests passed!</Text>;
};

const App: FC<{ name?: string }> = ({ name = "Stranger" }) => (
	<>
		<Text>
			Hola, <Text color="green">{name}</Text>
		</Text>
		<Counter></Counter>
	</>
);

module.exports = App;
export default App;
