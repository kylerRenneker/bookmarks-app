import React from 'react';
import Rating from '../Rating/Rating';
import BookmarksContext from '../BookmarksContext';
import './BookmarkItem.css';

export default function BookmarkItem(props) {

  console.log(props)
  return (
    <BookmarksContext.Consumer>
      {(context) => (
        <li className='BookmarkItem'>
          <div className='BookmarkItem__row'>
            <h3 className='BookmarkItem__title'>
              <a
                href={props.url}
                target='_blank'
                rel='noopener noreferrer'>
                {props.title}
              </a>
            </h3>
            <Rating value={props.rating} />
          </div>
          <p className='BookmarkItem__description'>
            {props.description}
          </p>
          <div className='BookmarkItem__buttons'>
            <button
              className='BookmarkItem__description'
              onClick={() => context.deleteBookmark(props.id)}
            >
              Delete
            </button>
          </div>
        </li>
      )}
    </BookmarksContext.Consumer>
  )
}
