import "./style.css";

const form = document.getElementById("form") as HTMLFormElement;

const handleSubmit = (e: Event) => {
	e.preventDefault();
	const figure = form.elements.namedItem("figure") as HTMLInputElement;
	const radius = form.elements.namedItem("radius") as HTMLInputElement;
	const base = form.elements.namedItem("base") as HTMLInputElement;
	const height = form.elements.namedItem("height") as HTMLInputElement;
	const side = form.elements.namedItem("side") as HTMLInputElement;
	const resultElement = document.getElementById(
		"result",
	) as HTMLParagraphElement;
	const printResult = (result: number) => {
		resultElement.style.display = "block";
		resultElement.innerHTML = `
      <strong>Resultado:</strong> El área de esta figura es ${result.toFixed(2)}
    `;
	};
	if (figure.value === "circle") {
		const area = Math.PI * Number(radius.value) ** 2;
		printResult(area);
	} else if (figure.value === "triangle") {
		const area = (Number(base.value) * Number(height.value)) / 2;
		printResult(area);
	} else if (figure.value === "square") {
		const area = Number(side.value) ** 2;
		printResult(area);
	} else {
		alert("Figura inválida.");
	}
};

form.addEventListener("submit", handleSubmit);
