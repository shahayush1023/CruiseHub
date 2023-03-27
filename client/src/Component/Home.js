import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import "./FinalHomePage.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={require("./2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>The View</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./final.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Our Balcony</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section class="home" id="home">
        <div class="head_container">
          <div class="box">
            <div class="text">
              <h1>Hola Cruise Lover!!!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <button>MORE INFO</button>
            </div>
          </div>
          <div class="image">
            <img src="image/home1.jpg" class="slide" />
          </div>
          <div class="image_item">
            <img
              src="https://dr4f7gkjfgtsc.cloudfront.net/images/contents/5-top-cruise-ships-1516823797.jpg"
              alt=""
              class="slide active"
            />
            <img
              src="https://th.bing.com/th/id/OIP.EHkOkOQcMloWfrd2qDWn9wHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
              class="slide"
            />
            <img src={require("./final.jpg")} alt="" class="slide" />
            <img src={require("./final.jpg")} alt="e" class="slide" />
          </div>
        </div>
      </section>

      <h3
        style={{
          marginTop: "50px",
          marginLeft: "440px",
          color: "black",
          textDecoration: "underline",
          fontFamily: "cursive",
        }}
      >
        MOST LIKED SERVICES BY OUR CUSTOMER!
      </h3>
      <div class="container-fluid mb-4">
        <div class="row justify-content-center row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          <div class="col mt-4">
            <div class="card">
              <img
                src="https://th.bing.com/th?id=OIP.-Smequv6ONYkIWiiQPFbigHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="..."
                height="250px"
              />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200px",
                  fontSize: "30px",
                  color: "green",
                  textDecoration: "underline",
                  fontFamily: "cursive",
                }}
              >
                Casino
              </p>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card">
              <img src={require("./food.jpg")} alt="..." height="250px" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200px",
                  fontSize: "30px",
                  color: "green",
                  textDecoration: "underline",
                  fontFamily: "cursive",
                }}
              >
                Food
              </p>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card">
              <img src={require("./dolphin.jpg")} alt="..." height="250px" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200px",
                  fontSize: "30px",
                  color: "green",
                  textDecoration: "underline",
                  fontFamily: "cursive",
                }}
              >
                SightSeeing
              </p>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card">
              <img src={require("./spa.jpg")} alt="..." height="250px" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200px",
                  fontSize: "30px",
                  color: "green",
                  textDecoration: "underline",
                  fontFamily: "cursive",
                }}
              >
                Spa
              </p>
            </div>
          </div>

          <section id="testimonials">
            <div class="testimonial-heading">
              <h1>OUR TEAM MEMBER</h1>
            </div>

            <div class="testimonial-box-container">
              <div class="testimonial-box">
                <div class="box-top">
                  <div class="profile">
                    <div class="profile-img">
                      <img src="https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>

                    <div class="name-user">
                      <strong>LISHI</strong>
                      <span>@lisha</span>
                    </div>
                  </div>

                  {/* <div class="reviews">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div> */}
                </div>

                <div class="client-comment">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, quaerat quis? Provident temporibus
                    architecto asperiores nobis maiores nisi a. Quae doloribus
                    ipsum aliquam tenetur voluptates incidunt blanditiis sed
                    atque cumque.
                  </p>
                </div>
              </div>

              <div class="testimonial-box">
                <div class="box-top">
                  <div class="profile">
                    <div class="profile-img">
                      <img src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>

                    <div class="name-user">
                      <strong>S0PHIE</strong>
                      <span>@sophie</span>
                    </div>
                  </div>

                  {/* <div class="reviews">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div> */}
                </div>

                <div class="client-comment">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, quaerat quis? Provident temporibus
                    architecto asperiores nobis maiores nisi a. Quae doloribus
                    ipsum aliquam tenetur voluptates incidunt blanditiis sed
                    atque cumque.
                  </p>
                </div>
              </div>

              <div class="testimonial-box">
                <div class="box-top">
                  <div class="profile">
                    <div class="profile-img">
                      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>

                    <div class="name-user">
                      <strong>Angela</strong>
                      <span>@Angela</span>
                    </div>
                  </div>

                  {/* <div class="reviews">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div> */}
                </div>

                <div class="client-comment">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, quaerat quis? Provident temporibus
                    architecto asperiores nobis maiores nisi a. Quae doloribus
                    ipsum aliquam tenetur voluptates incidunt blanditiis sed
                    atque cumque.
                  </p>
                </div>
              </div>

              <div class="testimonial-box">
                <div class="box-top">
                  <div class="profile">
                    <div class="profile-img">
                      <img src="https://i.pinimg.com/736x/a5/36/6b/a5366b1f610b492ccbc5792a4921f596.jpg" />
                    </div>

                    <div class="name-user">
                      <strong>Jacks</strong>
                      <span>@Jacks</span>
                    </div>
                  </div>

                  {/* <div class="reviews">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div> */}
                </div>

                <div class="client-comment">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, quaerat quis? Provident temporibus
                    architecto asperiores nobis maiores nisi a. Quae doloribus
                    ipsum aliquam tenetur voluptates incidunt blanditiis sed
                    atque cumque.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <p
        style={{
          color: "green",
          fontFamily: "cursive",
          marginLeft: "500px",
          border: "2px solid gray",
          textAlign: "center",
          fontWeight: "200px",
          fontSize: "30px",
          width: "40%",
        }}
      >
        Proceed to Book !
        {/* // <LinkContainer to="/Home1">
        //   <a href="">Click Me</a>
        // </LinkContainer> */}
        {sessionStorage.getItem("user") && (
          <LinkContainer to="/Home1">
            <a href="#">Click Me</a>
          </LinkContainer>
        )}
      </p>
    </>
  );
};

export default Home;
