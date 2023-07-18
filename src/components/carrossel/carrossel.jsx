import Slider from "react-slick";
import { Component } from "react";
import "./carrossel.css";

export default class carrossel extends Component {

  
  render() {
    let {titulo, jogos} = this.props

    

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
      <div className="div_flex">
        <article className="container_carrossel">
          <h2 className="titulo_slide"> {titulo} </h2>
          <Slider {...settings}>
            {jogos.map((slide, index) => (
              <section key={index} id={slide.id} className="container_slide">
                <img className="img_carrossel " alt={slide.name} src={slide.background_image}/>
              </section>
            ))}
          </Slider>
        </article>
      </div>
    );
  }
}
