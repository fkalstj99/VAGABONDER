import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SearchNav from '../components/Search/SearchNav';
import SearchHeader from '../components/Search/SearchHeader';
import SearchResults from '../components/Search/SearchResults';
import { Pagination } from '@material-ui/lab';
import searchStyles from '../styles/Search/Search.module.css';
import { Loader, PaginationLoader } from '../components/Search/SearchLoader';

let MemoPage: number = 0;
let changePage: number = 0;
const emptyLoader: null[] = Array(30).fill(null);

function search() {
  const [results, setResults] = useState<any>();
  const [category, setCategory] = useState<string>();
  const [input, setInput] = useState<string>('Seoul');
  const [page, setPage] = useState<number>(1);
  const [locationId, setLocationId] = useState<number>();
  const [pageCount, setPageCount] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = (e, page: number) => {
    setPage(page);
    changePage = 1;
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    if (input !== '') {
      setLoading(true);
      fetch(
        `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=KRW&units=km&query=${input}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
            'x-rapidapi-key':
              '1923f5d076msh46e17122a3f3cd2p1ec177jsncab4d3bddaa2',
          },
        }
      )
        .then((result) => result.json())
        .then((result) => {
          setResults(result),
            setPageCount(
              Math.ceil(result?.paging?.total_results / 30) > 100
                ? 100
                : Math.ceil(result?.paging?.total_results / 30)
            ),
            setLocationId(result?.data[0]?.result_object?.location_id),
            setLoading(false);
        });
    } else {
      setResults('');
    }
    setPage(1);
  }, [input]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (MemoPage !== 0 && changePage !== 0) {
      setLoading(true);
      if (category === 'attractions' && locationId) {
        fetch(
          `https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=km&offset=${
            page - 1
          }&location_id=${locationId}`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
              'x-rapidapi-key':
                '1923f5d076msh46e17122a3f3cd2p1ec177jsncab4d3bddaa2',
            },
          }
        )
          .then((result) => result.json())
          .then((result) => {
            setResults(result), setLoading(false);
          });
      } else {
        fetch(
          `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=${
            page - 1
          }&lang=en_US&currency=KRW&units=km&query=${input}`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
              'x-rapidapi-key':
                '1923f5d076msh46e17122a3f3cd2p1ec177jsncab4d3bddaa2',
            },
          }
        )
          .then((result) => result.json())
          .then((result) => {
            setResults(result), setLoading(false);
          });
      }
    }
    MemoPage = 1;
    changePage = 0;
  }, [page]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (category === 'attractions') {
      setLoading(true);
      fetch(
        `https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=km&location_id=${locationId}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
            'x-rapidapi-key':
              '1923f5d076msh46e17122a3f3cd2p1ec177jsncab4d3bddaa2',
          },
        }
      )
        .then((result) => result.json())
        .then((result) => {
          setResults(result);

          setPageCount(
            Math.ceil(result?.paging?.total_results / 30) > 100
              ? 100
              : Math.ceil(result?.paging?.total_results / 30)
          ),
            setLoading(false);
        });
    }
    if (category === 'results') {
      setLoading(true);
      fetch(
        `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=KRW&units=km&query=${input}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
            'x-rapidapi-key':
              '1923f5d076msh46e17122a3f3cd2p1ec177jsncab4d3bddaa2',
          },
        }
      )
        .then((result) => result.json())
        .then((result) => {
          setResults(result),
            setPageCount(
              Math.ceil(result?.paging?.total_results / 30) > 100
                ? 100
                : Math.ceil(result?.paging?.total_results / 30)
            ),
            setLoading(false);
        });
    }
    setPage(1);
  }, [category]);

  return (
    <>
      <Head>
        <title>search - We made best Travel app</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </Head>

      <SearchNav />
      <SearchHeader
        search={(query) => setInput(query)}
        category={(cate) => setCategory(cate)}
      />
      <main className={searchStyles.search__main}>
        <div className={searchStyles.search__main__container}>
          <h2 className={searchStyles.search__title}>
            Search Results for "{input}"
          </h2>
          {loading
            ? emptyLoader.map((el, index) => <Loader key={index} />)
            : results?.data?.map((result, index) => (
                <SearchResults results={result} key={index} />
              ))}
        </div>
      </main>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {loading ? (
          <PaginationLoader />
        ) : (
          <Pagination
            className={searchStyles.pagination}
            count={pageCount}
            size="large"
            page={page}
            variant="outlined"
            onChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}

export default search;
