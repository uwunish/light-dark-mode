import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function App() {
	const [theme, setTheme] = useLocalStorage("theme","dark");

	function handleClick() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return (
		<div
			className={
				theme === "light"
					? "app-container light-bg"
					: "app-container dark-bg"
			}>
			<h1
				className={
					theme === "light"
						? "heading dark-heading"
						: "heading light-heading"
				}>
				Hello World !
			</h1>
			<button
				onClick={handleClick}
				className={
					theme === "light"
						? "theme-change-btn dark-btn"
						: "theme-change-btn light-btn"
				}>
				Change Theme
			</button>
		</div>
	);
}

export default App;
