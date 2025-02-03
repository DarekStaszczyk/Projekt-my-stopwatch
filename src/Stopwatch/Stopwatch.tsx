import { useEffect, useState } from "react";
import "../index.scss";
import { Summary } from "./Summary";
import { LapsList } from "./LapsList";
import { StopwatchControls } from "./StopwatchControls";

export const Stopwatch = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [elapsedLapTime, setElapsedLapTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lapResults, setLapResults] = useState<number[]>([]);
    const [showSummary, setShowSummary] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const start = Date.now() - elapsedTime;
        const interval = setInterval(() => {
            setElapsedTime(Date.now() - start);
        }, 10);

        return () => clearInterval(interval);
    }, [isRunning, elapsedTime]);

    const startCounting = () => setIsRunning(true);
    const stopCounting = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setElapsedTime(0);
        setElapsedLapTime(0);
        setLapResults([]);
        setShowSummary(false);
    };

    const startNewLap = () => {
        setLapResults(prevLaps => [...prevLaps, elapsedTime - elapsedLapTime]);
        setElapsedLapTime(elapsedTime);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor((time / 60000) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        const milliseconds = Math.floor((time % 1000) / 10);
        return `${minutes.toString().padStart(2, "0")}:` +
               `${seconds.toString().padStart(2, "0")}:` +
               `${milliseconds.toString().padStart(2, "0")}`;
    };

    const showSummaryHandler = () => {
        setShowSummary(true);
    };

    const totalLapTime = lapResults.reduce((sum, lap) => sum + lap, 0);
    const fastestLap = lapResults.length > 0 ? Math.min(...lapResults) : 0;
    const slowestLap = lapResults.length > 0 ? Math.max(...lapResults) : 0;

    return (
        <div className="stopwatch-container">
            {!showSummary ? (
                <div className="stopwatch-content">
                    <h1>{formatTime(elapsedTime)}</h1>
                    <StopwatchControls 
                        isRunning={isRunning} 
                        startCounting={startCounting} 
                        stopCounting={stopCounting} 
                        resetTimer={resetTimer} 
                        startNewLap={startNewLap} 
                        showSummaryHandler={showSummaryHandler} 
                    />
                    <LapsList lapResults={lapResults} formatTime={formatTime} />
                </div>
            ) : (
                <Summary 
                    fastestLap={fastestLap} 
                    slowestLap={slowestLap} 
                    totalLapTime={totalLapTime} 
                    lapCount={lapResults.length} 
                    resetTimer={resetTimer} 
                    formatTime={formatTime} 
                />
            )}
        </div>
    );
};