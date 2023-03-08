import React, { Component } from "react";
import { Typing, TypingStep } from "typing-effect-reactjs";
import "../../styles/HistoricalBackground.css"

export class VisionandMandate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.handleTimer();
    }, 15000);
  }

  handleTimer = () => {
    setTimeout(() => {
      this.setState({ timer: !this.state.timer });
    }, 1000);
  };

  render() {
    return (
      <div>
        {" "}
        <div className="maxwidth">
          <div className="Landing-page-background">
            {this.state.timer === true ? (
              <h1 className="fadeText">Vision</h1>
            ) : (
              <h1 className="fadeText">Mandate</h1>
            )}
            <div className="MainCaption2">
              {this.state.timer === true ? (
                <Typing
                  className="typeWriter"
                  cursorColor="#435426"
                  styleClass="typeWriter"
                  disableBlinkingOnEnd={3}
                  typeSpeed={60}
                  text={[
                    "To make Dr NTR College of Agricultural Engineering, Bapatla an integrated center for academic excellence of agricultural engineering education known for its contribution to agriculture and allied fields in making agriculture more remunerative to farmersOur mission is to improve the health of our community by setting the standard of excellence in clinical care and in providing patient-centered medicine to prevent, diagnose & treat.",
                  ]}
                  smartBackspace={true}
                />
              ) : null}

              {this.state.timer === false ? (
                <Typing
                  cursorColor="#435426"
                  typeSpeed={60}
                  styleClass="typeWriter"
                  disableBlinkingOnEnd={3}
                  text={[
                    "To serve the farming community and enhance their quality of life through excellence in education, research, development and transfer of agricultural technologies.",
                  ]}
                  smartBackspace={true}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VisionandMandate;
