import React, { useState, useRef } from "react";
import { TextInputCore, ComponentContainer } from "./TextInput.styled";
import { SearchIcon } from "@assets/SearchIcon";
import { ThemeFactory } from "@src/Components/Theme/ThemeFactory";
type textInputProps = {
	placeholder?: string;
};

export const TextInput = ({ placeholder }: textInputProps) => {
	const [value, setValue] = useState<string>("");

	const [errors, setErrors] = useState<{ error: string; hasError: boolean }>({
		hasError: false,
		error: "",
	});
	const textInputInstance = useRef<HTMLInputElement>(null);
	const validationPattern = /[^a-zA-Z]/gi;
	const handleFirstTouch = (event: React.KeyboardEvent) => {
		if (event.key !== "Enter") {
			return;
		}

		if (value.match(validationPattern) !== null) {
			setErrors({
				hasError: true,
				error: "Search must not be empty, contain numbers or have any spaces",
			});
		} else {
			setErrors({
				hasError: false,
				error: "",
			});
		}
	};
	return (
		<ThemeFactory>
			<ComponentContainer>
				<TextInputCore
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setValue(event.target.value)
					}
					onKeyDown={handleFirstTouch}
					type="text"
					name=""
					id=""
					ref={textInputInstance}
					value={value}
					placeholder={placeholder}
					required
					className={`${errors.hasError ? "error" : ""}`}
				/>

				<SearchIcon />
			</ComponentContainer>
		</ThemeFactory>
	);
};
