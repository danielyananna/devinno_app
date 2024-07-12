const ToggleBlock = ({unit, toggleUnit}) => {
    return (
        <div className="details-box-header">
            <h4>Current Weather</h4>

            <div className="switch" onClick={toggleUnit}>
                <div className={`switch-toggle ${unit === "metric" ? "celsius" : "farenheit"}`}></div>
                <span className="celsius">C</span>
                <span className="farenheit">F</span>
            </div>
        </div>
    )
}

export default ToggleBlock;