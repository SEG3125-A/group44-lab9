// This file implements the multi-step progress bar to show the step you are at
import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


const MultiStepProgressBar = (props) => {

    return (
        <ProgressBar
            percent={((props.step - 1) / 2 * 100)}
            filledBackground="linear-gradient(to right, #0CBC00)"
        >
            {/* step 1 */}
            <Step transition="scale">
                {() => (
                    <img className="step"
                        width="66"
                        src="./images/circle-1-active.png"
                    />
                )}
            </Step>

            {/* step 2 */}
            <Step transition="scale">
                {({ accomplished }) => (
                    <img className="step"
                        width="66"
                        src={accomplished ? "./images/circle-2-active.png" : "./images/circle-2-inactive.png"}
                    />
                )}
            </Step>

            {/* step 3 */}
            <Step transition="scale">
                {({ accomplished }) => (
                    <img className="step"
                        width="66"
                        src={accomplished ? "./images/circle-3-active.png" : "./images/circle-3-inactive.png"}
                    />
                )}
            </Step>
        </ProgressBar>
    );
}

export default MultiStepProgressBar;
