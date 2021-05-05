export const SubHeader = (props) => {
    return (
      <header id='subheader'>
        <div className='subintro'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 subintro-text' >
                  <h1>
                    {props.title}
                    <span></span>
                  </h1>
                  {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Learn More
                  </a>{' '} */}
                </div>
            </div>
          </div>
        </div>
      </header>
    )
  }