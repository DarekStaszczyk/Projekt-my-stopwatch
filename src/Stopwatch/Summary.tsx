type SummaryProps = {
    fastestLap: number;
    slowestLap: number;
    totalLapTime: number;
    lapCount: number;
    resetTimer: () => void;
    formatTime: (time: number) => string;
};

export const Summary = ({ fastestLap, slowestLap, totalLapTime, lapCount, resetTimer, formatTime }: SummaryProps) => {
    return (
        <div className="summary">
            <h2>Podsumowanie</h2>
            <p><strong>Najkrótszy czas:</strong> {formatTime(fastestLap)}</p>
            <p><strong>Najdłuższy czas:</strong> {formatTime(slowestLap)}</p>
            <p><strong>Łączny czas:</strong> {formatTime(totalLapTime)}</p>
            <p><strong>Ilość okrążeń:</strong> {lapCount}</p>
            <button onClick={resetTimer} className="button-reset">Reset</button>
        </div>
    );
};