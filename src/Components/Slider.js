import React from "react";
import { useGlobalContext } from "../context/context";

const Slider = () => {
	const { sliderValue, setSliderValues } = useGlobalContext();
	const { min, max, value } = sliderValue;
	return (
		<>
			<input
				type='range'
				min={min}
				max={max}
				value={value}
				// class='slider'
				id='myRange'
				onChange={(e) =>
					setSliderValues({
						...sliderValue,
						value: e.target.value,
					})
				}
			/>
		</>
	);
};

export default Slider;
