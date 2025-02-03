type LapsListProps = {
    lapResults: number[],
    formatTime: (time: number) => string,
}

export const LapsList = ({ lapResults, formatTime }: LapsListProps) => {
    return (
        <>
            <h2>Okrążenia:</h2>
            <ul>
                {lapResults.map((lap, index) => (
                    <li key={index}>Okrążenie {index + 1}: {formatTime(lap)}</li>
                ))}
            </ul>
        </>
    );
};
