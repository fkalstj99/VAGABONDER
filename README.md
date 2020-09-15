# VAGABONDER



사용 툴  React, Next, firebase , typescript


 페이지 구성 
* pages
  * index.tsx
  * page.tsx
  * info.tsx
 


## Index

index.tsx
```javascript
export default function Home() {
  return (
    <>
      <Head>
        <title>Vagabonder - We made best</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <Main />
    </>
  );
}
```


Main.tsx
```typescript
export default function Main() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Header />
      <main className={mainStyles.main}>
        <section className={mainStyles.main__content}>
          <h2 className={mainStyles.main__content__title}>
            THE NOMAD B COMPANY
          </h2>
           
         ...

          <p>| press |</p>
          <LazyPressLoader />
          <hr
            style={{
              margin: '40px 0',
              border: '0',
              borderTop: '2px solid #eee',
              borderBottom: '1px solid #fff',
            }}
          />

        ...
        
        <Article loading={(okay) => setLoading(okay)} />
        //Article 컴포넌트가 로딩이 완료되면 loading-> true  
        
        <div className={mainStyles.buffer__content__table}>
          <div
            style={{
              height: '300px',
            }}
          />
          <h2>WHERE WE'RE GOING NEXT</h2>
        </div>
        {!loading && <Map />}
       //loading -> true면 구글 맵을 로드함 
       
        <div className={mainStyles.buffer__content__table}>
          <div
            style={{
              height: '220px',
            }}
          />
          <h2>FIND YOUR OWN JOURNEYS</h2>
        </div>
      </main>
    </>
  );
}
```

Header.tsx
```typescript
function Header() {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSrc, updateSrc] = useState<string>('/static/loading.gif');

  useEffect(() => {
   
    const imageToLoad = new Image();
    imageToLoad.src = ImageSrc;
    imageToLoad.onload = () => {
  //배경 이미지를 Mount되는 동시에 만들고 그동안 loading spinner를 보여준다 .
  //그 후 로딩이 완료되면 loading spinner와 배경이미지를 바꾼다.
      setLoading(false);
      updateSrc(ImageSrc);
    };
  }, [ImageSrc]);

  return (
    <header
      className={HeaderStyles.banner}
      style={{
        backgroundImage: `url(${currentSrc})`,
        backgroundSize: !loading && 'cover',
        height: '100vh',
        backgroundPosition: 'center center',
        opacity: loading ? '0.5' : '1',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity .15s linear',
      }}
    >
      {!loading && (
      //로딩이 완료되는 동시에 이미지를 바꾼다.
        <>
          <div className={HeaderStyles.banner__title__container}>
          
          
          ...
              EXPLORE MORE
            </h1>
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;

const ImageSrc =
  'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
```


LazyPressLoader.tsx
```typescript
const LazyPressLoader = React.memo(() => {
  const pressRef = useRef<HTMLTableSectionElement>();

  useEffect(() => {
    function checkIntersect(entries, io) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = image[entry.target.alt];
 
 // image를 마주칠때마다 const image = {...}에서 기본 src를 얻어온다 -> 그 후 src를 '' -> 'http://sc.vaesite.com/__data/uploads/images/VOGUE_LOGO_svg.png' 같이 바꿔놓는다.

          io.unobserve(entry.target);
        }
      });
    }

    let observer: IntersectionObserver;
      
    if (pressRef) {
      observer = new IntersectionObserver(checkIntersect, {
        rootMargin: '0px',
        threshold: 0.1,
      });

      const pressImage = document.querySelectorAll('.pressImage');
      pressImage.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => observer && observer.disconnect();
  }, [pressRef]);
  return (
    <>
      <section ref={pressRef} className={mainStyles.press}>
        <img
          alt="VOGUE"
          src=""
          style={{ width: '250px' }}
          className="pressImage"
        />
        ...
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt="A_CONTINUOS_LEAN"
          style={{ width: '200px', paddingBottom: '20px' }}
          src=""
          className="pressImage"
        />
      </section>
    </>
  );
});

const image = {
  VOGUE: 'http://sc.vaesite.com/__data/uploads/images/VOGUE_LOGO_svg.png',

  ...

  A_CONTINUOS_LEAN:
    'http://sc.vaesite.com/__data/uploads/images/logo%20(1).png',
};

```


Article.tsx

```typescript
function Article({ loading }) {
//상위 컴포넌트에서 props를 받아 리턴 
  const articleRef = useRef<HTMLTableSectionElement>();

  useEffect(() => {
    function checkIntersect(entries, io) {
      const imageSelector = document.querySelectorAll('.travelArticle');
      if (entries[0].isIntersecting) {
        imageSelector.forEach((el: HTMLElement | any, index: number) => {
          el.childNodes[0].childNodes[0].src = `${Country[index][0]}`;
          el.style.backgroundImage = `url(${Country[index][1]})`;
          // user가 이미지와 마주치면 배경,국기 이미지를 로드
          index === Country.length - 1 && io.unobserve(articleRef.current);
        
        });
        loading(false);
        // Article이 로딩되기 시작하면 GoogleMap을 로딩하도록 만듬 -> false를 Main으로 return 
      }
    }

    let observer: IntersectionObserver;
    if (articleRef) {
      observer = new IntersectionObserver(checkIntersect, {
        rootMargin: '0px',
        threshold: 0.1,
      });

      observer.observe(articleRef.current);
    }

    return () => observer && observer.disconnect();
  }, [articleRef]);

  return (
    <section ref={articleRef}>
      <a
        href="https://www.tripadvisor.co.kr/Attractions-g294217-Activities-Hong_Kong.html"
        target="_blank"
      >
        <article
          style={{
            backgroundImage: `url()`,
          }}
          className={classNames({
            [mainStyles.row__fluid]: true,
            [mainStyles.image__block]: true,
            [mainStyles.text__shadow]: true,
            ['travelArticle']: true,
          })}
        >
          <div className={mainStyles.center__contents}>
            <img src="" alt="Flag_of_Hongkong" />
            <h2>2020 NOVEMBER | TRAVEL TO HONG KONG </h2>
            <h3>NOVEMBER 11TH to NOVEMBER 18TH</h3>
            <button>LET'S GO</button>
          </div>
        </article>
      </a>
      
        ...
  
  );
}

export default Article;

const Country = [
  [
    'https://icons.iconarchive.com/icons/wikipedia/flags/64/HK-Hong-Kong-SAR-China-Flag-icon.png',
    'https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  ],
...
```


## Search


search.tsx 

multiple fetch가 안되도록 만드는 것에 중점을 두었다 
```typescript
let MemoPage: number = 0;
 //search.tsx가 mount될때 한번만 fetch하도록 MemoPage 1로 바꾼다. 
 //useMemo 역할 
let changePage: number = 0;
//다른 useEffect에 의해 multiple fetch되는 것을 막기위해 사용한다. 

const emptyLoader: null[] = Array(30).fill(null);
//데이터 fetch할때 30개의 load component를 만들도록 null로 채운다. 

function search() {
  const [results, setResults] = useState<any>();
  const [category, setCategory] = useState<string>();
  //자식 컴포넌트에서 category를 가져온다.
  const [input, setInput] = useState<string>('Seoul');
   //자식 컴포넌트에서 input을 가져온다.
  const [page, setPage] = useState<number>(1);
  const [locationId, setLocationId] = useState<number>();
  //attraction데이터를 fetch하기 위해 사용 
  const [pageCount, setPageCount] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = (e, page: number) => {
    setPage(page);
    //페이지 설정한다. 
    changePage = 1;
    //changePage를 1로 만들어서 multiple fetch를 막는다.
  };

//input이 바뀔시 실행() -> 자식 컴포넌트에서 data받아온다.
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    //smooth하게 올라가도록 설정 
    
    if (input !== '') {
      setLoading(true);
      //로딩 컴포넌트를 보여준다.
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
            //총 결과 수에서 30을 나눈 수가 100보다 많으면 -> 100으로 만듬  
            
            setLocationId(result?.data[0]?.result_object?.location_id),
            setLoading(false);
            
        });
    } else {
      setResults('');
    }
    setPage(1);
  }, [input]);

//page가 바뀔시
//input, category useEffect에서 page를 1로 설정하도록 했기에 MemoPage를 사용해서 multiple fetch를 막는다.
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
  
  

//category가 바뀔시 -> 자식 컴포넌트에서 data받아온다.
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
        <title>Vagabonder | Search</title>
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
          {loading // loading이 true일시 로딩 컴포넌트를 보여준다. 
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
        //material-ui의 Pagination사용 
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

```

SearchHeader.tsx
```typescript
function SearchHeader({ search, category }) {
  const [show, handleShow] = useState<boolean>(false);
  const SearchListRef = useRef<HTMLUListElement>();
  const [searchInput, setSearchInput] = useState<string>('Seoul');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? handleShow(true) : handleShow(false);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  if (SearchListRef.current?.childNodes !== undefined) {
    SearchListRef.current.childNodes.forEach((el: any) => {
      el.addEventListener('click', () => {
        SearchListRef.current
          .querySelector('.active')
          .classList.remove('active');

        el.classList.add('active');
        category(el.id);

      
//category클릭후 -> category가 바뀔때마다 부모컴포넌트(search.tsx)로 category id를 보낸다.
//classList를 바꿈으로서 style을 바꿔 category가 바뀌었음을 나타낸다.   
      });
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
 
 //input을 부모 컴포넌트(search.tsx)로 보낸다.
    if (searchInput !== '') {
      search(searchInput);
      
 //category가 results가 아니면 실행된다.
 //검색할시 -> category를 results로 바꾸기 위해 사용 
      if (SearchListRef.current.querySelector('.active').id !== 'results') {
        SearchListRef.current
          .querySelector('.active')
          .classList.remove('active');

        SearchListRef.current.firstElementChild.classList.add('active');
        category(SearchListRef.current.firstElementChild);
  // category가 attractions 일시 category를 results로 바꾼다 -> results의 style을 active로 바꾼다.  
      }
    }
    setSearchInput('');
  }

  return (
    <header className={show && searchStyles.search__white__container}>
      <section className={searchStyles.search}>
        <div className={searchStyles.search__container}>
          <form onSubmit={handleSubmit}>
            <i style={iconStyles} className="fa fa-search"></i>
            <input
              className={searchStyles.search__input}
              placeholder="Search"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <ul ref={SearchListRef} className={searchStyles.search__list}>
          <li id="results" className="active">
            Results
          </li>
          <li id="attractions">Attractions</li>
        </ul>
      </section>
    </header>
  );
}
```







