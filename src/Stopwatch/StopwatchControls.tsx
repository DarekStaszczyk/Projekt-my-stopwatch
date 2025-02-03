type StopwatchControlsProps = {
    isRunning: boolean;
    startCounting: () => void;
    stopCounting: () => void;
    resetTimer: () => void;
    startNewLap: () => void;
    showSummaryHandler: () => void;
    };
    
    export const StopwatchControls = ({
    isRunning,
    startCounting,
    stopCounting,
    resetTimer,
    startNewLap,
    showSummaryHandler
    }: StopwatchControlsProps) => {
    return (
    <div className="button-container">
        <button onClick={isRunning ? stopCounting : startCounting} className="button-start">
            {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer} className="button-reset">Reset</button>
        <button onClick={startNewLap} className="button-lap">Lap</button>
        <button onClick={showSummaryHandler} className="button-summary">Summary</button>
    </div>
    );
    };