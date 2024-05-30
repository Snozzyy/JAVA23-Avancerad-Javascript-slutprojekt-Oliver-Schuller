import React, { useEffect } from "react";
import anime from "animejs";
import { calculateProgress } from "../../utils/progressbar";

function ProgressBar({tasks}) {

    const progress:number = calculateProgress(tasks)

    return ( 
        <div className="progress">
            <progress value={progress} max="100"/>
            {progress}%
        </div>
     );
}

export default ProgressBar;