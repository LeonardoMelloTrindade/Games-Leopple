import Slider from "react-slick";
import { Component } from "react";
import "./carrossel.css";

export default class carrossel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 250,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0,
          },
        },
      ],
    };
    return (
      <div className="div-flex">
        <article className="container-carrossel">
          <h2> Responsive </h2>
          <Slider {...settings}>
            <section>
              <h3>1</h3>
            </section>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
            <div>
              <h3>10</h3>
            </div>
            <div>
              <h3>11</h3>
            </div>
          </Slider>
        </article>
      </div>
    );
  }
}
