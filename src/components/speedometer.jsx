import React, { Component } from "react";

class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.intersectionObserver = null;
  }

  componentDidMount() {
    this.setupIntersectionObserver();
  }

  componentWillUnmount() {
    this.cleanupIntersectionObserver();
  }

  setupIntersectionObserver = () => {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateSpeedometer();
            this.cleanupIntersectionObserver();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (this.canvas.current) {
      this.intersectionObserver.observe(this.canvas.current);
    }
  };

  cleanupIntersectionObserver = () => {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }
  };

  animateSpeedometer = () => {
    const canvasElement = this.canvas.current;
    const ctx = canvasElement.getContext("2d");
    const x = canvasElement.offsetWidth / 2;
    const y = canvasElement.offsetHeight / 2;
    const radius = 90;
    const minRad = 1 * Math.PI;
    const maxRad = 2 * Math.PI;
    const grd = ctx.createLinearGradient(x - radius, 0, x - radius + 185, 0);
    grd.addColorStop(0.1, "#6886F0");
    grd.addColorStop(0.5, "#8FEFEF");
    grd.addColorStop(0.9, "#72CAFC");
    grd.addColorStop(1, "#02E7BE");

    function speedometer(value) {
      let valueRad = (maxRad - minRad) * value + minRad;
      ctx.clearRect(0, 0, 220, 220);
      ctx.beginPath();
      ctx.arc(x, y, radius, minRad, maxRad);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#FFF";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, radius, minRad, valueRad);
      ctx.lineWidth = 5;
      ctx.strokeStyle = grd;
      ctx.stroke();
    }

    function animate(options) {
      let start = performance.now();
      requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = options.timing(timeFraction);
        options.draw(progress);
        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      });
    }

    function animateTo(to) {
      animate({
        duration: 3000,
        timing: (t) => t,
        draw: (progress) => {
          if (progress > to) {
            progress = to;
            speedometer(progress);
            return;
          }
          speedometer(progress);
        }
      });
    }

    animateTo(this.props.Rate / 450);
  };

  render() {
    return (
      <div id="speedometer" className="dashboard-item__speedometer speedometer">
        <canvas
          width="220"
          height="220"
          ref={this.canvas}
          className="speedometer__canvas"
        ></canvas>
      </div>
    );
  }
}

export default Speedometer;
