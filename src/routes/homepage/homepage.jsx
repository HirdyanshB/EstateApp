import './homepage.scss';
import SearchBar from '../../components/searchBar/SearchBar';
function Homepage() {
    return (
        <div className='homepage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Your Dream Place
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At maiores quas non recusandae aperiam facilis quis vel similique impedit. Veniam hic, corporis
                        beatae rem asperiores aspernatur maiores ullam dolorum vel fugiat labore assumenda.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default Homepage