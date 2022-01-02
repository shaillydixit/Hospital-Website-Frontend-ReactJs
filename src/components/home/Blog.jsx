import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import AppURL from '../../api/AppURL';
import Blog1 from '../../assets/images/blog/blog1.jpeg';
import Blog2 from '../../assets/images/blog/blog2.jpeg';
import Blog3 from '../../assets/images/blog/blog3.jpg';
import Blog4 from '../../assets/images/blog/blog4.jpeg';
import Blog5 from '../../assets/images/blog/blog5.jpeg';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      BlogData: [],
    };
  }
  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({ name: name });
  };

  emailOnChange = (event) => {
    let email = event.target.value;
    this.setState({ email: email });
  };

  messageOnChange = (event) => {
    let message = event.target.value;
    this.setState({ message: message });
  };

  onFormSubmit = (event) => {
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let sendBtn = document.getElementById('sendBtn');
    let contactForm = document.getElementById('contactForm');

    if (message.length === 0) {
      toast.error('please enter your comment');
    } else if (name.length === 0) {
      toast.error('please enter your name');
    } else if (email.length === 0) {
      toast.error('please enter your email');
    } else {
      sendBtn.innerHTML = 'Sending...';
      let MyFormData = new FormData();
      MyFormData.append('name', name);
      MyFormData.append('email', email);
      MyFormData.append('message', message);

      axios
        .post(AppURL.CommentBlog, MyFormData)
        .then((response) => {
          if (response.status == 200 && response.data == 1) {
            toast.success('comment posted successfully');
            sendBtn.innerHTML = 'Send';
            contactForm.reset();
            this.setState({
              name: '',
              message: '',
              email: '',
            });
          } else {
            toast.error('error');
          }
        })
        .catch((error) => {
          toast.error('error');
        });
    }

    event.preventDefault();
  };

  componentDidMount() {
    axios
      .get(AppURL.BlogInfo)
      .then((response) => {
        this.setState({ BlogData: response.data });
      })
      .catch((error) => {});
  }

  render() {
    const BlogInfoData = this.state.BlogData;
    const MyView = BlogInfoData.map((BlogInfoData, i) => {
      return (
        <div className="row align-items-start">
          <div className="col-lg-8 m-15px-tb">
            <article className="article">
              <div className="article-img">
                <img src={BlogInfoData.blog_image} title="" alt="" />
              </div>
              <div className="article-title">
                <h6>
                  <a>Medical</a>
                </h6>
                <h2>{BlogInfoData.blog_title} </h2>
                <div className="media">
                  <div className="avatar">
                    <img src={BlogInfoData.author_image} title="" alt="" />
                  </div>
                  <div className="media-body">
                    <label>{BlogInfoData.author_name}</label>
                    <span>{BlogInfoData.blog_date}</span>
                  </div>
                </div>
              </div>
              <div className="article-content">
                <p>{BlogInfoData.blog_description}</p>
              </div>
              <div className="nav tag-cloud">
                <a href="#">{BlogInfoData.blog_tags}</a>
              </div>
            </article>
          </div>
          <div className="col-lg-4 m-15px-tb blog-aside">
            <div className="widget widget-author">
              <div className="widget-title">
                <h3>Author</h3>
              </div>
              <div className="widget-body">
                <div className="media align-items-center">
                  <div className="avatar">
                    <img src={BlogInfoData.author_image} title="" alt="" />
                  </div>
                  <div className="media-body">
                    <h6>
                      {BlogInfoData.author_info}
                      <br /> {BlogInfoData.author_name}
                    </h6>
                  </div>
                </div>
                <p>{BlogInfoData.author_description}</p>
              </div>
            </div>

            <div className="widget widget-latest-post">
              <div className="widget-title">
                <h3>Latest Post</h3>
              </div>
              <div className="widget-body">
                <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5>
                        <a href="#">{BlogInfoData.blog_title}</a>
                      </h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="#">
                        {BlogInfoData.author_name}
                      </a>
                      <a className="date" href="#">
                        {BlogInfoData.blog_date}
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="#">
                      <img src={BlogInfoData.blog_image} title="" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget widget-tags">
              <div className="widget-title">
                <h3>Latest Tags</h3>
              </div>
              <div className="widget-body">
                <div className="nav tag-cloud">
                  <a href="#">{BlogInfoData.blog_tags}</a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <Container>
          <div className="blog-single gray-bg">
            <div className="container">
              {MyView}
              <div className="row align-items-start">
                <div className="col-lg-8 m-15px-tb">
                  <div className="contact-form article-comment">
                    <h4>Leave a Reply</h4>
                    <Form
                      id="contactForm"
                      onSubmit={this.onFormSubmit}
                      method="POST"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              onChange={this.nameOnChange}
                              name="name"
                              id="name"
                              placeholder="Name *"
                              className="form-control"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              onChange={this.emailOnChange}
                              name="email"
                              id="email"
                              placeholder="Email *"
                              className="form-control"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <Form.Control
                              onChange={this.messageOnChange}
                              as="textarea"
                              name="message"
                              id="message"
                              placeholder="Your message *"
                              rows="4"
                              className="form-control"
                            ></Form.Control>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="send">
                            <Button
                              className="px-btn theme"
                              id="sendBtn"
                              type="submit"
                            >
                              <span>Send</span> <i className="arrow"></i>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="col-lg-4 m-15px-tb blog-aside"></div>{' '}
              </div>
            </div>
          </div>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Blog;
