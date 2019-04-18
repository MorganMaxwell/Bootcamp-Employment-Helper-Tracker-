import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavHead from "../NavHead";
import Stats from "../Stats";
import Posts from "../Posts";
import MyJobs from "../MyJobs";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

const data = [
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
]

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      nextGroupOfPosts: [],
      hasMorePosts: true
    };
  };
  // use state to hold like 50 posts, display like 10, and do some fancy scrolling stuff to load more?
  componentDidMount() {
    axios.get('/dash/posts/', {

    })
      // if no more posts, pass a boolean to say so
      .then(function (response) {
        this.setState({
          posts: response
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  loadPosts(page) {
  };

  render() {
    let posts = data.slice(0, 9);

    return (
      <div>
        <NavHead></NavHead>
        <Container fluid={true}>
          <Row>
            <Col sm="3"><Stats></Stats></Col>
            <Col sm="6">
              {data.map(post => {
                return (<Feed
                  title={post.title}
                  body={post.body}
                  date={post.date}
                ></Feed>);
              })}
            </Col>
            <Col sm="3"><MyJobs></MyJobs></Col>
          </Row>
          </Container>
      </div>
    );
  };
};

export default Dashboard;