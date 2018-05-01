import React, { Component } from "react";
import "../Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        {/* Panel */}
        <div id="toppanel">
          <div id="panel">
            <div className="content clearfix">
              <div className="formLabel">
                <h3>CLIENT LOGIN</h3>
              </div>
              {/* end .formLabel */}
              <div className="left">
                {/* Login Form */}
                <form className="clearfix" action="#" method="post">
                  <label className="grey" htmlFor="log">
                    Username:
                  </label>
                  <input
                    className="field"
                    type="text"
                    name="log"
                    id="log"
                    defaultValue
                    size={10}
                  />
                </form>
              </div>
              {/* end .left */}
              <div className="left">
                <label className="grey" htmlFor="pwd">
                  Password:
                </label>
                <input
                  className="field"
                  type="password"
                  name="pwd"
                  id="pwd"
                  size={10}
                />
              </div>
              {/* end .left */}
              <div className="left">
                <input
                  type="submit"
                  name="submit"
                  defaultValue
                  className="bt_login"
                />
              </div>
              {/* end .left */}
              {/* end Login Form */}
              <br className="clearfloat" />
              <div className="paneltxt">
                Not a client? Interested in working together?{" "}
                <a href="http://www.thesum.ca/contact.html">
                  Click here to request a quote for your next project!
                </a>
              </div>
              {/* end .paneltxt */}
            </div>
            {/*  end .content clearfix */}
          </div>
          {/* end #panel */}
        </div>
        {/* The tab on top */}
        <div className="tab">
          <ul className="login">
            <li className="left">&nbsp;</li>
            <li id="toggle">
              <a id="open" className="open" href="#">
                Client Login
              </a>
              <a
                id="close"
                style={{ display: "none" }}
                className="close"
                href="#"
              >
                Close Panel
              </a>
            </li>
            <li className="right">&nbsp;</li>
          </ul>
        </div>{" "}
        {/* end .tab */}
        {/*end #toppanel */}
        <div className="wrapper">
          <div className="container">
            <div className="content">
              <div id="columnLeft">
                <div id="logo">
                  <a href="http://thesum.ca/index.html">
                    <img src="http://www.thesum.ca/images/logo.jpg" />
                  </a>
                </div>
                {/* end #logo */}
              </div>
              {/* end #columnLeft" */}
              <div id="columnRight">
                <div id="header">
                  <div id="menu">
                    <ul id="menu">
                      <li className={1}>
                        <a href="http://thesum.ca/index.html">
                          <img src="http://www.thesum.ca/images/menu/home_btn.gif" />
                        </a>
                      </li>
                      <li className="divline" />
                      <li className={2}>
                        <a href="http://thesum.ca/about.html">
                          <img src="http://www.thesum.ca/images/menu/about_btn.gif" />
                        </a>
                      </li>
                      <li className="divline" />
                      <li className={3}>
                        <a href="http://thesum.ca/work.html">
                          <img src="http://www.thesum.ca/images/menu/work_btn.gif" />
                        </a>
                      </li>
                      <li className="divline" />
                      <li className={4}>
                        <a href="http://thesum.ca/blog">
                          <img src="http://www.thesum.ca/images/menu/blog_btn_active.gif" />
                        </a>
                      </li>
                      <li className="divline" />
                      <li className={5}>
                        <a href="http://thesum.ca/contact.html">
                          <img src="http://www.thesum.ca/images/menu/contact_btn.gif" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end #menu */}
                </div>
                {/* end #header */}
                <div id="main">
                  <div id="mainLeft">
                    <a href="http://www.thesum.ca/blog">
                      <img src="http://thesum.ca/images/Blogtxt.gif" />
                    </a>
                    <br className="clearfloat" />
                    <div id="blogSidebar">
                      TOPICS:
                      <div className="blogSidebarNav">
                        <ul>
                          <li className="cat-item cat-item-3 current-cat">
                            <a
                              href="http://thesum.ca/blog/category/news/"
                              title="View all posts filed under News"
                            >
                              News
                            </a>{" "}
                            (12)
                          </li>
                          <li className="cat-item cat-item-6">
                            <a
                              href="http://thesum.ca/blog/category/projects/"
                              title="Projects and all things 'project-y'."
                            >
                              Projects
                            </a>{" "}
                            (10)
                          </li>
                          <li className="cat-item cat-item-4">
                            <a
                              href="http://thesum.ca/blog/category/stuff-we-like/"
                              title="View all posts filed under Stuff We Like"
                            >
                              Stuff We Like
                            </a>{" "}
                            (1)
                          </li>
                        </ul>
                        <div id="twitter-4" className="widget widget_twitter">
                          <div>
                            <h2>
                              <span className="twitterwidget twitterwidget-title">
                                Recent Tweets
                              </span>
                            </h2>
                            <ul>
                              <li>
                                <span className="entry-content">
                                  JukePop Serials: For lovers of genre
                                  fiction:...{" "}
                                  <a
                                    href="http://t.co/RLgr7rMm2Z"
                                    target="_blank"
                                  >
                                    http://t.co/RLgr7rMm2Z
                                  </a>
                                </span>{" "}
                                <span className="entry-meta">
                                  <span className="time-meta">
                                    <a
                                      href="http://twitter.com/thesumca/statuses/319916037887905792"
                                      target="_blank"
                                    >
                                      08:55:01 PM April 04, 2013
                                    </a>
                                  </span>{" "}
                                  <span className="from-meta">
                                    from{" "}
                                    <a
                                      href="http://www.facebook.com/twitter"
                                      rel="nofollow"
                                    >
                                      Facebook
                                    </a>
                                  </span>
                                </span>{" "}
                                <span className="intent-meta">
                                  <a
                                    href="http://twitter.com/intent/tweet?in_reply_to=319916037887905792"
                                    data-lang="en"
                                    className="in-reply-to"
                                    title="Reply"
                                    target="_blank"
                                  >
                                    Reply
                                  </a>
                                  <a
                                    href="http://twitter.com/intent/retweet?tweet_id=319916037887905792"
                                    data-lang="en"
                                    className="retweet"
                                    title="Retweet"
                                    target="_blank"
                                  >
                                    Retweet
                                  </a>
                                  <a
                                    href="http://twitter.com/intent/favorite?tweet_id=319916037887905792"
                                    data-lang="en"
                                    className="favorite"
                                    title="Favorite"
                                    target="_blank"
                                  >
                                    Favorite
                                  </a>
                                </span>
                              </li>
                              <li>
                                <span className="entry-content">
                                  The Startup Kids: a documentary about young
                                  web entrepreneurs in the U.S. and Europe:{" "}
                                  <a
                                    href="http://t.co/N1q7hSgJk1"
                                    target="_blank"
                                  >
                                    http://t.co/N1q7hSgJk1
                                  </a>{" "}
                                  <a
                                    href="http://t.co/HhMVuKedS0"
                                    target="_blank"
                                  >
                                    http://t.co/HhMVuKedS0
                                  </a>
                                </span>{" "}
                                <span className="entry-meta">
                                  <span className="time-meta">
                                    <a
                                      href="http://twitter.com/thesumca/statuses/304422707213254656"
                                      target="_blank"
                                    >
                                      02:50:03 AM February 21, 2013
                                    </a>
                                  </span>{" "}
                                  <span className="from-meta">
                                    from{" "}
                                    <a
                                      href="http://www.facebook.com/twitter"
                                      rel="nofollow"
                                    >
                                      Facebook
                                    </a>
                                  </span>
                                </span>{" "}
                                <span className="intent-meta">
                                  <a
                                    href="http://twitter.com/intent/tweet?in_reply_to=304422707213254656"
                                    data-lang="en"
                                    className="in-reply-to"
                                    title="Reply"
                                    target="_blank"
                                  >
                                    Reply
                                  </a>
                                  <a
                                    href="http://twitter.com/intent/retweet?tweet_id=304422707213254656"
                                    data-lang="en"
                                    className="retweet"
                                    title="Retweet"
                                    target="_blank"
                                  >
                                    Retweet
                                  </a>
                                  <a
                                    href="http://twitter.com/intent/favorite?tweet_id=304422707213254656"
                                    data-lang="en"
                                    className="favorite"
                                    title="Favorite"
                                    target="_blank"
                                  >
                                    Favorite
                                  </a>
                                </span>
                              </li>
                              <li>
                                <span className="entry-content">
                                  Receive a design lesson in your inbox each
                                  week, hand crafted by a design pro:{" "}
                                  <a
                                    href="http://t.co/lOMsbD6B"
                                    target="_blank"
                                  >
                                    http://t.co/lOMsbD6B
                                  </a>{" "}
                                  <a
                                    href="http://t.co/bpo6XE9B"
                                    target="_blank"
                                  >
                                    http://t.co/bpo6XE9B
                                  </a>
                                </span>{" "}
                                <span className="entry-meta">
                                  <span className="time-meta">
                                    <a
                                      href="http://twitter.com/thesumca/statuses/299589626874712065"
                                      target="_blank"
                                    >
                                      06:45:07 PM February 07, 2013
                                    </a>
                                  </span>{" "}
                                  <span className="from-meta">
                                    from{" "}
                                    <a
                                      href="http://www.facebook.com/twitter"
                                      rel="nofollow"
                                    >
                                      Facebook
                                    </a>
                                  </span>
                                </span>{" "}
                                <span className="intent-meta">
                                  <a
                                    href="http://twitter.com/intent/tweet?in_reply_to=299589626874712065"
                                    data-lang="en"
                                    className="in-reply-to"
                                    title="Reply"
                                    target="_blank"
                                  >
                                    Reply
                                  </a>
                                  <a
                                    href="http://twitter.com/intent/retweet?tweet_id=299589626874712065"
                                    data-lang="en"
                                    className="retweet"
                                    title="Retweet"
                                    target="_blank"
                                  >
                                    Retweet
                                  </a>
                                  <a
                                    href="http://twitter.com/intent/favorite?tweet_id=299589626874712065"
                                    data-lang="en"
                                    className="favorite"
                                    title="Favorite"
                                    target="_blank"
                                  >
                                    Favorite
                                  </a>
                                </span>
                              </li>
                              <li>
                                <span className="entry-content">
                                  Eight UX Design Trends for 2013:...{" "}
                                  <a
                                    href="http://t.co/sg3Ef8uk"
                                    target="_blank"
                                  >
                                    http://t.co/sg3Ef8uk
                                  </a>
                                </span>{" "}
                                <span className="entry-meta">
                                  <span className="time-meta">
                                    <a
                                      href="http://twitter.com/thesumca/statuses/299588045496270850"
                                      target="_blank"
                                    >
                                      06:38:50 PM February 07, 2013
                                    </a>
                                  </span>{" "}
                                  <span className="from-meta">
                                    from{" "}
                                    <a
                                      href="http://www.facebook.com/twitter"
                                      rel="nofollow"
                                    >
                                      Facebook
                                    </a>
                                  </span>
                                </span>{" "}
                                <span className="intent-meta">
                                  <a
                                    href="http://twitter.com/intent/tweet?in_reply_to=299588045496270850"
                                    data-lang="en"
                                    className="in-reply-to"
                                    title="Reply"
                                    target="_blank"
                                  >
                                    Reply
                                  </a>
                                  <a
                                    href="http://twitter.com/intent/retweet?tweet_id=299588045496270850"
                                    data-lang="en"
                                    className="retweet"
                                    title="Retweet"
                                    target="_blank"
                                  >
                                    Retweet
                                  </a>
                                  <a
                                    href="http://twitter.com/intent/favorite?tweet_id=299588045496270850"
                                    data-lang="en"
                                    className="favorite"
                                    title="Favorite"
                                    target="_blank"
                                  >
                                    Favorite
                                  </a>
                                </span>
                              </li>
                            </ul>
                            <div className="follow-button">
                              <a
                                href="http://twitter.com/thesumca"
                                className="twitter-follow-button"
                                title="Follow @thesumca"
                                data-lang="en"
                                target="_blank"
                              >
                                @thesumca
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end .blogSidebarNav */}
                    </div>
                    {/* end #blogSidebar */}
                  </div>
                  {/* end #mainLeft */}
                  <div id="mainRight">
                    <div className="blogTopic">
                      <h2> News Archives</h2>
                    </div>
                    {/* end .blogTopic" */}
                    <div className="navigation">
                      <div className="next-posts">
                        <a href="http://thesum.ca/blog/category/news/page/2/">
                          « Older Entries
                        </a>
                      </div>
                      <div className="prev-posts" />
                    </div>
                    <div className="post-615 post type-post status-publish format-standard hentry category-news">
                      <div className="blogHead">
                        <div className="meta">Nov 7/14</div>{" "}
                      </div>
                      {/* end .blogHead */}
                      <div className="blogTitle">
                        <div id="post-615">
                          <a href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/">
                            BC Sports Hall of Fame: 1954 British Empire and
                            Commonwealth Games
                          </a>
                        </div>
                      </div>
                      <div className="entry">
                        <p>
                          The BC Sports Hall of Fame educates and entertains
                          through its programs and collections by telling
                          stories of outstanding achievements in sport in
                          British Columbia. TH= SUM, in partnership with Kei
                          Space, worked together with the BC Sports Hall of Fame
                          on their signature exhibit celebrating the 60th
                          anniversary of the 1954 British Empire and
                          Commonwealth Games.
                        </p>
                        <p>
                          TH= SUM was responsible for the creative direction and
                          design of exhibit graphics and strived to retain the
                          nostalgia of the times while giving it a modern feel.
                          Colour and imagery were inspired by the original
                          graphics created for the Games and media and artifacts
                          combined within the exhibit brought the Games back to
                          life for past athletes of the 1954 Games and visitors
                          alike.
                        </p>
                        <p>
                          <a href="http://www.theprovince.com/sports/Video+Behind+scenes+Sports+Hall+Fame+1954+retrospective/10083986/story.html">
                            Video: Behind the scenes of the B.C. Sports Hall of
                            Fame’s 1954 retrospective by The Province
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/1_bcsports/"
                            rel="attachment wp-att-616"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/1_bcsports.jpg"
                              alt
                              title="1_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-616"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/2_bcsports/"
                            rel="attachment wp-att-617"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/2_bcsports.jpg"
                              alt
                              title="2_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-617"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/3_bcsports/"
                            rel="attachment wp-att-618"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/3_bcsports.jpg"
                              alt
                              title="3_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-618"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/4_bcsports/"
                            rel="attachment wp-att-619"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/4_bcsports.jpg"
                              alt
                              title="4_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-619"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/5_bcsports/"
                            rel="attachment wp-att-620"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/5_bcsports.jpg"
                              alt
                              title="5_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-620"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/6_bcsports/"
                            rel="attachment wp-att-621"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/6_bcsports.jpg"
                              alt
                              title="6_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-621"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/7_bcsports/"
                            rel="attachment wp-att-622"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/7_bcsports.jpg"
                              alt
                              title="7_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-622"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/8_bcsports/"
                            rel="attachment wp-att-623"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/8_bcsports.jpg"
                              alt
                              title="8_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-623"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/9_bcsports/"
                            rel="attachment wp-att-624"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/9_bcsports.jpg"
                              alt
                              title="9_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-624"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/10_bcsports/"
                            rel="attachment wp-att-625"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/10_bcsports.jpg"
                              alt
                              title="10_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-625"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2014/11/bc-sports-hall-of-fame-1954-british-empire-and-commonwealth-games/11_bcsports/"
                            rel="attachment wp-att-626"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2014/11/11_bcsports.jpg"
                              alt
                              title="11_bcsports"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-626"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                    <h5 className="postmetadata">
                      Posted by val | Posted in{" "}
                      <a
                        href="http://thesum.ca/blog/category/news/"
                        title="View all posts in News"
                        rel="category tag"
                      >
                        News
                      </a>{" "}
                    </h5>
                    <div className="post-514 post type-post status-publish format-standard hentry category-news category-projects">
                      <div className="blogHead">
                        <div className="meta">Nov 7/13</div>{" "}
                      </div>
                      {/* end .blogHead */}
                      <div className="blogTitle">
                        <div id="post-514">
                          <a href="http://thesum.ca/blog/2013/11/larry-berg-%e2%80%93-flight-path-park/">
                            Larry Berg – Flight Path Park
                          </a>
                        </div>
                      </div>
                      <div className="entry">
                        <p>
                          Located at the Vancouver Airport, the Larry Berg –
                          Flight Path Park was renamed to honour the retiring
                          CEO of the Vancouver Airport Authority’s role in
                          creating community-oriented amenities within YVR.{" "}
                        </p>
                        <p>
                          Flight Path Park, provides an opportunity for viewing
                          planes and creates a community gathering place for
                          residents and visitors. The central feature of the
                          park, the globe, allows visitors to interact with the
                          structure while learning about YVR’s role in
                          connecting people from around the world. Benches
                          shaped as paper airplanes also provide a whimsical
                          element to the space.
                        </p>
                        <p>
                          TH= SUM worked with Ken Heit Creative and Kei Space to
                          assist in conceptualizing the central feature of the
                          park and detailing renderings for this project.{" "}
                        </p>
                        <p>
                          To learn more about this project, check out this
                          article at{" "}
                          <a href="http://www.vancitybuzz.com/2013/10/vancouvers-plane-spotting-heaven-yvr-flight-path-park/">
                            vancitybuzz.com
                          </a>
                        </p>
                        <p>
                          <strong>Rendering </strong>
                          <br />
                          <a
                            href="http://thesum.ca/blog/2013/11/larry-berg-%e2%80%93-flight-path-park/1_render/"
                            rel="attachment wp-att-515"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2013/11/1_render.jpg"
                              alt
                              title="1_render"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-515"
                            />
                          </a>
                        </p>
                        <p>
                          <strong>Final Build</strong>
                          <br />
                          <a
                            href="http://thesum.ca/blog/2013/11/larry-berg-%e2%80%93-flight-path-park/6_real/"
                            rel="attachment wp-att-543"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2013/11/6_real.jpg"
                              alt
                              title="6_real"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-543"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2013/11/larry-berg-%e2%80%93-flight-path-park/4_real/"
                            rel="attachment wp-att-518"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2013/11/4_real.jpg"
                              alt
                              title="4_real"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-518"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2013/11/larry-berg-%e2%80%93-flight-path-park/3_real/"
                            rel="attachment wp-att-519"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2013/11/3_real.jpg"
                              alt
                              title="3_real"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-519"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            href="http://thesum.ca/blog/2013/11/larry-berg-%e2%80%93-flight-path-park/2_real/"
                            rel="attachment wp-att-520"
                          >
                            <img
                              src="http://thesum.ca/blog/wp-content/uploads/2013/11/2_real.jpg"
                              alt
                              title="2_real"
                              width={633}
                              height={423}
                              className="alignnone size-full wp-image-520"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                    <h5 className="postmetadata">
                      Posted by val | Posted in{" "}
                      <a
                        href="http://thesum.ca/blog/category/news/"
                        title="View all posts in News"
                        rel="category tag"
                      >
                        News
                      </a>,{" "}
                      <a
                        href="http://thesum.ca/blog/category/projects/"
                        title="View all posts in Projects"
                        rel="category tag"
                      >
                        Projects
                      </a>{" "}
                    </h5>
                    <div className="post-299 post type-post status-publish format-standard hentry category-news category-stuff-we-like">
                      <div className="blogHead">
                        <div className="meta">Jul 13/12</div>{" "}
                      </div>
                      {/* end .blogHead */}

                      <div className="navigation">
                        <div className="next-posts">
                          <a href="http://thesum.ca/blog/category/news/page/2/">
                            « Older Entries
                          </a>
                        </div>
                        <div className="prev-posts" />
                      </div>
                    </div>
                    {/* end #mainright */}
                  </div>
                  {/* end"main" */}
                </div>
                {/* end #columnRight */}
              </div>
              {/* end .content */}
            </div>
            {/* end .container */}
          </div>
          {/* end .wrapper */}
        </div>
      </div>
    );
  }
}

export default Blog;
