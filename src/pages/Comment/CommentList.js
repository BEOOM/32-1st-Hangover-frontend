import React, { useState } from 'react';
import NewComment from './NewComment';
import RaitingSummary from './RaitingSummary';
import EditComment from './EditComment';
import AddRaiting from './AddRaiting';
import './CommentList.scss';

let num = 0;
const fillBeer = <img src="/images/beer_100.png" className="fulllBeer" />;
const empty = <img src="/images/beer.png" className="fulllBeer emptyBeer" />;

const CommentList = () => {
  const rait = 4.3;

  const reviewTitle = ['리뷰순', '최신순', '사용자명'];

  const [rating, setRaiting] = useState(0);
  const [commentList, setCommentList] = useState([]);
  return (
    <section className="commentListSection">
      <div className="commentH1">
        <h2>숙취 후기</h2>
      </div>
      <div className="commentNavContainer">
        <nav className="commentNav">
          {reviewTitle.map(item => (
            <ul key={num++}>
              <li>{item}</li>
            </ul>
          ))}
        </nav>
        <article className="commentAll">
          <div className="commentDiv">
            <NewComment
              commentList={commentList}
              setCommentList={setCommentList}
            />
          </div>
          <div className="raitingBox">
            <div className="detailNum">{rait}</div>
            <div className="detailRaitBox"></div>
            <div className="detaillReviewCount">200rating </div>
            <div className="detaillLine"></div>
            <RaitingSummary />
            <span className="raitingDes">
              Add your own rating and help other Vivino users pick the right
              wine!
            </span>
            <div className="userStar">
              <div className="user"></div>
              <AddRaiting rating={rating} setRaiting={setRaiting} />
            </div>
            <div className="detaillLine"></div>
            <EditComment
              rating={rating}
              commentList={commentList}
              setCommentList={setCommentList}
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default CommentList;
