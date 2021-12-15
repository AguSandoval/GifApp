import React, { useState } from "react";

const CategoryAdd: React.FC<{
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("Hola mundo");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((prevCategories) => [inputValue, ...prevCategories]);
            setInputValue("");
        }
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default CategoryAdd;
