import React from 'react';
import SearchResultStyles from '../../styles/Search/SearchResult.module.css';
import StarRatingComponent from 'react-star-rating-component';

function SearchResults({ results }) {
  let resultsObj;

  results?.result_object
    ? (resultsObj = [results?.result_object, results?.review_snippet?.snippet])
    : (resultsObj = results);

  if (resultsObj?.ad_position) {
    return <></>;
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  return (
    <div className={SearchResultStyles.result__container}>
      <img
        className={SearchResultStyles.result__img}
        src={
          resultsObj.length > 1
            ? resultsObj[0].photo?.images.medium.url
            : resultsObj.photo?.images.medium.url
        }
      />
      <div>
        <h1>{resultsObj.length > 1 ? resultsObj[0].name : resultsObj.name}</h1>
        <div className={SearchResultStyles.main__container}>
          {resultsObj[0]?.rating !== undefined ||
          resultsObj?.ratings !== undefined ? (
            <StarRatingComponent
              name="rate"
              starCount={5}
              value={
                resultsObj.length > 1
                  ? resultsObj[0]?.rating
                  : resultsObj?.rating
              }
              editing={false}
            />
          ) : (
            <StarRatingComponent
              name="rate"
              starCount={5}
              value={5}
              editing={false}
            />
          )}

          <p style={{ marginTop: '3px' }}>
            {resultsObj.length > 1 ? resultsObj[0]?.rating : resultsObj?.rating}
          </p>
        </div>
        <h1 className={SearchResultStyles.address}>
          {resultsObj.length > 1 ? resultsObj[0].address : resultsObj.address}
        </h1>
        <h1>
          {resultsObj?.ranking_subcategory && resultsObj?.ranking_subcategory}
        </h1>
        <div className={SearchResultStyles.sub__container}>
          <i className="fa fa-commenting"></i>
          <h1>
            {resultsObj.length > 1
              ? resultsObj[0].num_reviews
              : resultsObj.num_reviews}{' '}
            reviews
          </h1>
        </div>
        <p className={SearchResultStyles.description}>
          {resultsObj.length > 1
            ? truncate(resultsObj[1], 70)
            : truncate(resultsObj?.description, 70)}
        </p>
      </div>
    </div>
  );
}

export default SearchResults;

/*
{!resultsObj?.ranking_subcategory
  ? truncate(resultsObj?.review_snippet?.snippet, 80)
  : resultsObj?.ranking_subcategory}*/
