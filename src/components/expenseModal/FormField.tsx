import { ReactElement, useEffect, useRef, useState } from "react";
import { Expense } from "../../interfaces";

const FormField = ({
	fieldName,
	expensesData,
	label,
	isOptional,
	validation,
	refs,
}: {
	fieldName: string;
	expensesData: Expense;
	label: string;
	isOptional: boolean;
	validation?: (errorRef: React.Dispatch<React.SetStateAction<string>>, value: string) => boolean;
	refs: { [K: string]: (() => boolean) | null };
}): ReactElement => {
	const fieldRef = useRef<HTMLInputElement>(null!);
	const [ErrorMessage, setErrorMessage] = useState<string>("");

	useEffect(() => {
		refs[fieldName] = validation ? () => validation(setErrorMessage, fieldRef.current.value) : null;
	}, []);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		(expensesData as any)[fieldName] = event.target.value;
	};

	const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!isOptional && validation) {
			const result = validation(setErrorMessage, event.target.value);
			if (result) {
				setErrorMessage("");
			}
		} else setErrorMessage("");
	};

	return (
		<div className="data__feild__wrapper">
			<span className="data__field__label">{label}</span>
			<input
				type="text"
				className={`data__field__input ${ErrorMessage !== "" ? "data__field__input__error" : ""}`}
				onBlur={onBlur}
				onChange={onChange}
				ref={fieldRef}
			/>
			{ErrorMessage !== "" ? <span className="data__field__error__message">{ErrorMessage}</span> : null}
		</div>
	);
};

export { FormField };
