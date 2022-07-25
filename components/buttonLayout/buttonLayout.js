const ButtonLayout = ({ buttonStylesAndInfo, handleButtonClick }) => {

    const emitClickEvent = () => {
        handleButtonClick(buttonStylesAndInfo.buttonTextCode)
    }

    return (
        <button className="button buttonAdditional" onClick={emitClickEvent}>
            {buttonStylesAndInfo.buttonText}
            <style jsx>{`
                .button {
                    background-color: ${buttonStylesAndInfo.backgroundColor};
                    color: ${buttonStylesAndInfo.color};
                    outline: none;
                    border: none;
                    padding: 1rem;
                    border-radius: 0.25rem;
                    cursor: pointer;
                    font-weight: bold;
                }

                .buttonAdditional {
                    ${buttonStylesAndInfo.buttonAdditionalStyle}
                }
            `}</style>
        </button>
    )
}

export default ButtonLayout;