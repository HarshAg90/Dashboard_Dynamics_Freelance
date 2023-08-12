import React from "react";

export default class Speedometer extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  componentDidMount() {
    const canvasElement = this.canvas.current;
    const canvasWidth = canvasElement.offsetWidth;
    const canvasHeight = canvasElement.offsetHeight;

    const ctx = canvasElement.getContext("2d");

    const x = canvasWidth / 2;
    const y = canvasHeight / 2;
    const width = 185;
    const radius = 90;
    const minRad = 1 * Math.PI;
    const maxRad = 2 * Math.PI;

    // Create gradient
    const grd = ctx.createLinearGradient(x - radius, 0, x - radius + width, 0);
    grd.addColorStop(0.1, "#6886F0");
    grd.addColorStop(0.5, "#8FEFEF");
    grd.addColorStop(0.9, "#72CAFC");
    grd.addColorStop(1, "#02E7BE");

    function speedometer(value) {
      let valueRad = (maxRad - minRad) * value + minRad;

      ctx.clearRect(0, 0, 220, 220);

      //background
      ctx.beginPath();
      ctx.arc(x, y, radius, minRad, maxRad);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#FFF";
      ctx.stroke();

      //foreground
      ctx.beginPath();
      ctx.arc(x, y, radius, minRad, valueRad);
      ctx.lineWidth = 5;
      ctx.strokeStyle = grd;
      ctx.stroke();

      ctx.save();

      let grd2 = ctx.createRadialGradient(
        radius,
        valueRad,
        6,
        radius,
        valueRad,
        20
      );

      let pinXCoord = radius * Math.cos(valueRad - 0.03) + x;
      let pinYCoord = radius * Math.sin(valueRad - 0.03) + y;

      let colorRGBStr = getPinColor(ctx, pinXCoord, pinYCoord);

      grd2.addColorStop(0, colorRGBStr + "1)");
      grd2.addColorStop(0.1, colorRGBStr + "1)");
      grd2.addColorStop(0.1, colorRGBStr + "0.7)");
      grd2.addColorStop(1, colorRGBStr + "0)");

      ctx.beginPath();
      ctx.translate(x, y);
      ctx.rotate(valueRad - 0.1);
      ctx.arc(radius, valueRad, 50, 0, Math.PI * 2);
      ctx.fillStyle = grd2;
      ctx.fill();

      ctx.restore();

      ctx.fillStyle = "#CEE5F2";
      ctx.font = "48px Segoe UI";
      let percentValue = (value * 100).toFixed(1);
      let percentValueStrLenght = ("" + percentValue).length;
      let textXcoord =
        percentValueStrLenght == 3
          ? x - 40
          : percentValueStrLenght == 4
          ? x - 55
          : x - 70;
      ctx.fillText(percentValue, textXcoord, y - 10);

      let percentXcoord =
        percentValueStrLenght == 3
          ? textXcoord + 61
          : percentValueStrLenght == 4
          ? textXcoord + 88
          : textXcoord + 115;
      ctx.font = "34px Segoe UI";
      ctx.fillText("%", percentXcoord, y - 10);
    }

    function getPinColor(ctx, left, top) {
      let data = ctx.getImageData(+left.toFixed(0), +top.toFixed(0), 1, 1).data;

      let rColor = data[0];
      let gColor = data[1];
      let bColor = data[2];

      if (rColor == 0 || gColor == 0 || bColor == 0)
        return "rgba(206, 40, 117,";

      return `rgba(${rColor}, ${gColor}, ${bColor}, `;
    }

    function animate(options) {
      let start = performance.now();

      requestAnimationFrame(function animate(time) {
        // timeFraction от 0 до 1
        let timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        // текущее состояние анимации
        let progress = options.timing(timeFraction);

        options.draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      });
    }

    function animateTo(to) {
      console.log(to);
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

    animateTo(this.props.Rate / 100);
  }

  render() {
    // let { DeficitBasesCount, ProficitBasesCount } = this.props;
    return (
      <div className="dashboard-item__speedometer speedometer">
        <p className="speedometer__text"></p>

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
